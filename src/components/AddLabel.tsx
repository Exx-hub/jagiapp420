import { FiPlusCircle } from "react-icons/fi";

function AddLabel({ setIsAdding }: { setIsAdding: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div
      className="cursor-pointer flex items-center text-white z-10 text-xl"
      onClick={() => setIsAdding((prev) => !prev)}
    >
      <FiPlusCircle />
      <h1 className="font-bold ml-1 text-xl">Create an Entry</h1>
    </div>
  );
}

export default AddLabel;
