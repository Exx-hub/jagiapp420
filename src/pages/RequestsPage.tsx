import { useEffect, useState } from "react";
import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { HiOutlinePlusCircle } from "react-icons/hi";
import RequestItem from "../components/RequestItem";
import AddForm from "../components/AddForm";

export interface IRequest {
  title: string;
  completed: boolean;
  requester: string;
  id: string;
}

function RequestsPage() {
  const [requests, setRequests] = useState<IRequest[] | null>(null);

  const [requester, setRequester] = useState("Pola");
  const [isAdding, setIsAdding] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "requests"), (snapshot) => {
      const parsedData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      }) as IRequest[];

      const filteredGoals = parsedData.filter((request) => request.requester === requester);

      setRequests(filteredGoals);

      return () => unsubscribe();
    });
  }, [requester]);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAdding || !input) {
      alert("please enter an input");
      return;
    }

    try {
      await addDoc(collection(db, "requests"), { title: input, completed: false, requester });
      console.log("new request added");
      setInput("");
      setIsAdding(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = async (id: string, completed: boolean) => {
    try {
      await updateDoc(doc(db, "requests", id), { completed: !completed });
      console.log("toggle completed");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteRequest = async (id: string) => {
    try {
      await deleteDoc(doc(db, "requests", id));
      console.log("request deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative h-[calc(100vh-52px)] max-w-lg mx-auto animate-fadeIn">
      <div className="flex items-center space-x-4 text-5xl py-5 ml-3">
        <button
          className={`p-1 rounded-xl ${requester === "Pola" ? "bg-black/70" : " bg-white/30"}`}
          onClick={() => setRequester("Pola")}
        >
          👨🏼‍🍳
        </button>
        <button
          className={`p-1 rounded-xl ${requester === "Alvin" ? " bg-black/70" : "bg-white/30"}`}
          onClick={() => setRequester("Alvin")}
        >
          👩🏻‍🍳
        </button>
      </div>

      <div className="relative bg-menu bg-no-repeat bg-contain bg-top mx-auto w-[95%] h-[450px]  font-chalk text-white rounded-lg overflow-hidden">
        <h2 className="text-6xl text-center mt-5 mb-3">MENU</h2>
        <div className="flex flex-col w-[62%] mx-auto">
          {requests && requests?.length > 0 ? (
            <ul className="flex flex-col text-2xl space-y-2 animate-slide-from-top">
              {requests?.map((request) => (
                <RequestItem
                  key={request.id}
                  request={request}
                  handleToggle={handleToggle}
                  handleDeleteRequest={handleDeleteRequest}
                />
              ))}
            </ul>
          ) : (
            <p className="text-xl mt-2 text-center">- No requests right now -</p>
          )}
        </div>
      </div>

      {requests && requests?.length < 5 && (
        <>
          {isAdding ? (
            <div className="text-xl text-white bg-black/50 w-max ml-3 mt-2 p-1 rounded-lg">
              <AddForm
                input={input}
                setInput={setInput}
                setIsAdding={setIsAdding}
                handleAdd={handleAdd}
                isRequest
              />
            </div>
          ) : (
            <button
              onClick={() => setIsAdding(true)}
              className="bg-black/50 ml-3 mt-2 p-1 rounded-lg text-2xl text-white"
            >
              <HiOutlinePlusCircle />
            </button>
          )}
        </>
      )}
    </section>
  );
}
// MAX 15 input
export default RequestsPage;
