import { useState } from "react";
import { FiTrash } from "react-icons/fi";

function RequestsPage() {
  const requests = [
    {
      id: 0,
      title: "Kare Kare",
      completed: false,
      requester: "Pola",
    },
    {
      id: 1,
      title: "Tinola",
      completed: false,
      requester: "Pola",
    },
    {
      id: 2,
      title: "Champorado",
      completed: false,
      requester: "Pola",
    },
    {
      id: 3,
      title: "Sopas",
      completed: false,
      requester: "Pola",
    },
    {
      id: 4,
      title: "Adobong Pusit",
      completed: false,
      requester: "Pola",
    },
    {
      id: 5,
      title: "KFC",
      completed: false,
      requester: "Alvin",
    },
    {
      id: 6,
      title: "Khao Khai II",
      completed: false,
      requester: "Alvin",
    },
    {
      id: 7,
      title: "Bok Chicken",
      completed: false,
      requester: "Alvin",
    },
    {
      id: 8,
      title: "Serenitea CC",
      completed: false,
      requester: "Alvin",
    },
  ];

  const [requester, setRequester] = useState("Pola");

  return (
    <section className="relative h-[calc(100vh-52px)] max-w-lg mx-auto animate-fadeIn">
      <div className="flex items-center space-x-4 text-5xl my-5 ml-3">
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

      <div className="bg-menu bg-no-repeat bg-contain bg-top mx-auto w-[95%] h-full pt-5 font-chalk text-white rounded-lg overflow-hidden">
        <h2 className="text-6xl text-center mb-3">MENU</h2>
        <div className="flex flex-col w-[62%] mx-auto">
          <ul className="flex flex-col text-2xl space-y-2">
            {requests
              .filter((item) => item.requester === requester)
              .map((request) => (
                <li key={request.id} className="flex items-center justify-between">
                  <p>{request.title}</p>

                  <span className="text-base">
                    <FiTrash />
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
// MAX 15 input
export default RequestsPage;
