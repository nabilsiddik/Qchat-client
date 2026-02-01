import Image from "next/image";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-2">
      <div className="flex items-center gap-2">
        <div className="h-15 w-15 rounded-full">
          <Image src={'/img/chat/nabil-siddik.png'} width={60} height={60} alt="chat friend profile picture" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-700">Bachelors Point</h3>
          <p className="text-xs text-green-500">Active now</p>
        </div>
      </div>
    </div>
  );
}
