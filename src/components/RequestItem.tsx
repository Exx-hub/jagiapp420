import { FiTrash } from "react-icons/fi";
import { IRequest } from "../pages/RequestsPage";

interface RequestItemProps {
  request: IRequest;
  handleToggle: (id: string, completed: boolean) => Promise<void>;
  handleDeleteRequest: (id: string) => Promise<void>;
}

function RequestItem({ request, handleToggle, handleDeleteRequest }: RequestItemProps) {
  return (
    <li className="flex items-center justify-between">
      <p
        className={`cursor-pointer ${request.completed ? "line-through" : ""}`}
        onClick={() => handleToggle(request.id, request.completed)}
      >
        {request.title}
      </p>

      <span className="text-base cursor-pointer" onClick={() => handleDeleteRequest(request.id)}>
        <FiTrash />
      </span>
    </li>
  );
}

export default RequestItem;
