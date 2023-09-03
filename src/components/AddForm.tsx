import { HiCheckCircle, HiXCircle } from "react-icons/hi";

interface AddFormProps {
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setIsAdding: React.Dispatch<React.SetStateAction<boolean>>;
  isItem?: boolean;
}

function AddForm({ handleAdd, input, setInput, setIsAdding, isItem }: AddFormProps) {
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
        placeholder={isItem ? "Add New Item" : "Add New Location"}
        className={`px-2 py-1 rounded-md mr-1  outline-none text-gray-500 bg-white ${
          isItem ? "border border-gray-300 text-sm py-1" : "text-base"
        }`}
      />

      <button type="button" className="text-2xl mr-1" onClick={handleCancel}>
        <HiXCircle />
      </button>
      <button type="submit" className="text-2xl ">
        <HiCheckCircle />
      </button>
    </form>
  );
}

export default AddForm;
