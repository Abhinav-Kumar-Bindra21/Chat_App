import React from "react";
import { useChatStore } from "../store/useChatStore";

const ActiveTabSwitch = () => {
  const { activeTab, setActiveTab } = useChatStore();
  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2 ">
      <button
        onClick={() => setActiveTab("chats")}
        className={`w-1/2 py-3 text-center font-medium transition-all duration-200
      ${activeTab === "chats" ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-400 hover:text-slate-200"}`}
      >
        Chats
      </button>
      <button
        onClick={() => setActiveTab("contacts")}
        className={`w-1/2 py-3 text-center font-medium transition-all duration-200
      ${activeTab === "contacts" ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-400 hover:text-slate-200"}`}
      >
        Contacts
      </button>
    </div>
  );
};

export default ActiveTabSwitch;
