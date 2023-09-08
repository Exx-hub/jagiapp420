import { useContext, useEffect, useState } from "react";
import AddForm from "../components/AddForm";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { FiTrash2 } from "react-icons/fi";
import { Context } from "../context/context";

interface Destination {
  title: string;
  type: string;
  id: string;
}

function TravelPage() {
  const [currentTab, setCurrentTab] = useState<"domestic" | "international">("domestic");
  const [isAdding, setIsAdding] = useState(false);
  const [input, setInput] = useState("");

  const [destinations, setDestinations] = useState<Destination[] | null>([]);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAdding || !input) {
      alert("please enter an input");
      return;
    }

    try {
      await addDoc(collection(db, "destinations"), { title: input, type: currentTab });
      console.log("new travel added");
      setInput("");
      setIsAdding(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTravel = async (id: string) => {
    try {
      await deleteDoc(doc(db, "destinations", id));
      console.log("destination deleted");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "destinations"), (snapshot) => {
      const parsedData = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      }) as Destination[];

      const filtered = parsedData.filter((item) => item.type === currentTab);

      setDestinations(filtered);

      return () => unsubscribe();
    });
  }, [currentTab]);

  const { showContent } = useContext(Context);

  return (
    <div className="w-[90%] mx-auto h-[calc(100vh-58px)] max-w-lg pt-20 animate-fadeIn">
      {showContent ? (
        <div className="w-full mx-auto">
          <div className="flex space-x-4 translate-x-5 text-sm">
            <button
              className={`tab  ${
                currentTab === "domestic"
                  ? "bg-gray-100 border-t-[4px] border-[#333] text-black"
                  : "bg-[#333] text-white"
              }`}
              onClick={() => {
                setInput("");
                setIsAdding(false);
                setCurrentTab("domestic");
              }}
            >
              Domestic
            </button>
            <button
              className={`tab  ${
                currentTab === "international"
                  ? "bg-gray-100 border-t-[4px] border-[#333] text-black"
                  : "bg-[#333] text-white"
              }`}
              onClick={() => {
                setInput("");
                setIsAdding(false);
                setCurrentTab("international");
              }}
            >
              International
            </button>
          </div>

          <div className="p-4 bg-gray-100 shadow-lg rounded">
            {currentTab === "domestic" ? (
              <div className="flex flex-col animate-fadeIn">
                <h2 className="text-2xl mb-2 pl-1">🚙🚙🚙</h2>
                <ul className="px-1 mb-2">
                  {destinations?.map((dest) => (
                    <div
                      key={dest.id}
                      className="flex items-center space-x-1 mb-1 text-black  px-1"
                    >
                      <h2 className="text-lg">{dest.title}</h2>
                      <span
                        onClick={() => handleDeleteTravel(dest.id)}
                        className="cursor-pointer text-[#5b5861] text-sm"
                      >
                        <FiTrash2 />
                      </span>
                    </div>
                  ))}
                </ul>
                {isAdding ? (
                  <AddForm
                    handleAdd={handleAdd}
                    input={input}
                    setInput={setInput}
                    setIsAdding={setIsAdding}
                    isItem
                  />
                ) : (
                  <button
                    onClick={() => setIsAdding(true)}
                    className="self-end text-2xl text-[#8d839c]"
                  >
                    <HiOutlinePlusCircle />
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col animate-slide-from-top">
                <h2 className="text-2xl mb-2 pl-1">🛩️🛩️🛩️</h2>
                <ul className="px-1 mb-2">
                  {destinations?.map((dest) => (
                    <div key={dest.id} className="flex items-center space-x-1 mb-1 text-black px-1">
                      <h2 className="text-lg">{dest.title}</h2>
                      <span
                        onClick={() => handleDeleteTravel(dest.id)}
                        className="cursor-pointer text-[#5b5861] text-sm"
                      >
                        <FiTrash2 />
                      </span>
                    </div>
                  ))}
                </ul>
                {isAdding ? (
                  <AddForm
                    handleAdd={handleAdd}
                    input={input}
                    setInput={setInput}
                    setIsAdding={setIsAdding}
                    isItem
                  />
                ) : (
                  <button
                    onClick={() => setIsAdding(true)}
                    className="self-end text-2xl text-[#8d839c] hover:scale-[1.15] transition-all duration-300"
                  >
                    <HiOutlinePlusCircle />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TravelPage;
