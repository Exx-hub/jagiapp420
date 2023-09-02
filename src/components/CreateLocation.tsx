import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

import { db } from "../config/firebase-config";
import AddForm from "./AddForm";
import AddLabel from "./AddLabel";

function CreateLocation() {
  const [isAdding, setIsAdding] = useState(false);
  const [input, setInput] = useState("");

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(location);

    if (!isAdding || !input) {
      alert("please enter an input");
      return;
    }

    try {
      await addDoc(collection(db, "locations"), { title: input });
      console.log("new entry added");
      setInput("");
      setIsAdding(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-transparent border border-gray-300 p-2 rounded-lg w-[90%] mx-auto min-w-[337px] relative flex">
      <div className="absolute inset-0 bg-black opacity-40 z-0 rounded-lg"></div>
      {isAdding ? (
        <AddForm
          handleAdd={handleAdd}
          input={input}
          setIsAdding={setIsAdding}
          setInput={setInput}
        />
      ) : (
        <AddLabel setIsAdding={setIsAdding} />
      )}
    </div>
  );
}

export default CreateLocation;
