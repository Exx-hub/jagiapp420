import { HiCheckCircle, HiXCircle } from "react-icons/hi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

interface AddFormProps {
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
  isItem?: boolean;
  isRequest?: boolean;
}

function AddForm({ handleAdd, input, setInput, setIsAdding, isItem, isRequest }: AddFormProps) {
  const handleCancel = () => {
    setInput("");
    setIsAdding(false);
  };

  return (
    <form
      onSubmit={handleAdd}
      className={`flex items-center text-xl z-10 px-1 animate-fadeIn ${
        isItem ? "text-[#333]" : "text-white"
      }`}
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isItem ? "Add New Item" : isRequest ? "Add New Request" : "Add New Location"}
        className={`px-2 py-1 rounded-md mr-1  outline-none text-gray-500 bg-white ${
          isItem ? "border border-gray-300 text-sm py-1" : "text-base"
        }`}
        maxLength={isRequest ? 15 : 23}
      />

      <button type="button" className="text-2xl mr-1" onClick={handleCancel}>
        {isRequest ? <AiOutlineCloseCircle /> : <HiXCircle />}
      </button>
      <button type="submit" className="text-2xl ">
        {isRequest ? <AiOutlineCheckCircle /> : <HiCheckCircle />}
      </button>
    </form>
  );
}

export default AddForm;
