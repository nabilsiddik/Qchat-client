import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 justify-between relative">
      <div className="sticky top-0 bg-white z-10 h-[8vh]">
        <ChatHeader />
      </div>
      <div className="max-h-[67vh] overflow-y-auto">
        <MessageList />
      </div>
      <div className="sticky bottom-0 bg-white z-10 h-[8vh]">
        <MessageInput />
      </div>
    </div>
  );
}
