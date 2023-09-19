import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiPlus, FiTrash, FiTrash2 } from "react-icons/fi";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { Item } from "../pages/HomePage";
import AddForm from "./AddForm";

function LocationCard({ title, items, id }: { title: string; items: Item[]; id: string }) {
  const [open, setOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [input, setInput] = useState("");
  const [height, setHeight] = useState<number | undefined>(0);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [open]);

  const handleAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAdding || !input) {
      alert("please enter an input");
      return;
    }

    try {
      await updateDoc(doc(db, "locations", id), {
        items:
          items?.length > 0
            ? [...items, { name: input, completed: false }]
            : [{ name: input, completed: false }],
      });
      console.log("new entry added");
      setIsAdding(false);
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggle = async (index: number) => {
    const updatedItems = items.map((item, i) => {
      if (index === i) {
        item.completed = !item.completed;
        return item;
      } else {
        return item;
      }
    });

    try {
      await updateDoc(doc(db, "locations", id), { items: updatedItems });
      console.log("toggle completed");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteItem = async (index: number) => {
    const filteredItems = items.filter((_, i) => index !== i);

    try {
      await updateDoc(doc(db, "locations", id), { items: filteredItems });
      console.log("item deleted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLocation = async () => {
    try {
      await deleteDoc(doc(db, "locations", id));
      console.log("location deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white text-[#333] border border-gray-300 p-2 rounded-lg flex flex-col w-[90%] mx-auto min-w-[337px] mb-1">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="font-bold uppercase hover:text-slate-600 px-2 text-xl">{title}</div>

        <div className={`${open ? "rotate-180" : "rotate-0"}`}>
          <FiChevronDown />
        </div>
      </div>

      <div
        style={{ height }}
        className="overflow-hidden transition-[height] duration-500 ease-in-out"
      >
        {open && (
          <div ref={ref}>
            {items?.length > 0 ? (
              <ul className="mb-3 ml-1 text-lg">
                {items.map((item, index) => (
                  <div key={item.name} className="flex items-center text-base p-1">
                    <h2
                      onClick={() => handleToggle(index)}
                      className={item.completed ? "line-through" : ""}
                    >
                      {item.name}
                    </h2>
                    <span
                      className="ml-1 text-[14px] text-gray-500"
                      onClick={() => handleDeleteItem(index)}
                    >
                      <FiTrash2 />
                    </span>
                  </div>
                ))}
              </ul>
            ) : null}

            {isAdding ? (
              <AddForm
                handleAdd={handleAdd}
                input={input}
                setInput={setInput}
                setIsAdding={setIsAdding}
                isItem
              />
            ) : (
              <div className="flex items-center justify-end space-x-2 text-lg">
                <button className="cursor-pointer" onClick={() => setIsAdding(true)}>
                  <FiPlus />
                </button>

                <button className="cursor-pointer" onClick={handleDeleteLocation}>
                  <FiTrash />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationCard;
