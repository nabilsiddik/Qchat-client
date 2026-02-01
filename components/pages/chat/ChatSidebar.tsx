import { chats } from "@/data/chats";
import { Avatar } from "@radix-ui/react-avatar";
import Image from "next/image";

export default function ChatSidebar() {
  return (
    <div className="w-80 border-r border-gray-200 px-4 pb-4 overflow-y-auto max-h-[80vh] relative">
      <div className="sticky top-0 bg-white z-10 pb-5 border-b border-gray-200 py-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Chats</h2>

        <input
          placeholder="Search Messenger"
          className="w-full rounded-md text-gray-700 border border-gray-200 px-3 py-2 text-sm outline-none"
        />
      </div>

      <div className="mt-5">
        {chats.map(chat => (
          <div
            key={chat.id}
            className="flex items-center gap-3 p-2 rounded-lg cursor-pointer bg-gray-100 border mb-3 hover:bg-linear-to-r from-primary to-secondary group"
          >
            <div className="h-15 w-15 rounded-full">
              <Image src={'/img/chat/nabil-siddik.png'} width={60} height={60} alt="chat friend profile picture" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-700 group-hover:text-white">{chat.name}</p>
              <p className="text-sm text-gray-500 font-medium group-hover:text-white">
                {chat.lastMessage}
              </p>
            </div>
            <span className="text-xs text-neutral-400 group-hover:text-white">{chat.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
