import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl select-none"
    >
      <span className="text-4xl sm:ml-3 text-blue-400">+</span>
      <span className="pl-3 pr-7 hidden sm:flex"> Create</span>
    </button>
  );
}
