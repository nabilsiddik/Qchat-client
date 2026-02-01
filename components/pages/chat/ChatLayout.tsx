import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./chatWindow";

export default function ChatLayout() {
  return (
    <div className="min-h-[84vh] flex border rounded-lg text-white ">
      <ChatSidebar />
      <ChatWindow />
    </div>
  );
}
