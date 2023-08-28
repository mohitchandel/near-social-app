import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <nav className="w-full flex items-center justify-between mb-5 py-8 px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Social Near
          </Link>
        </div>
        <div className="grid grid-cols-1">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Connect Wallet
          </button>
        </div>
      </nav>
    </>
  );
}
