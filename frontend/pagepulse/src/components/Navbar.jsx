import { Globe, Home, Info, Settings, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <div className="flex items-center gap-3">
          <Globe className="text-blue-500" size={38} />
          <h1 className="text-3xl font-bold">Page Pulse</h1>
        </div>

        <div className="hidden md:flex gap-10 text-lg">

          <a
            href="#"
            className="flex items-center gap-2 text-blue-400 font-semibold"
          >
            <Home size={20} />
            Home
          </a>

        

        </div>

      </div>
    </nav>
  );
}