import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">
      <div className="py-8 text-center">
        <div className="flex justify-center items-center gap-2">
          <Heart className="text-blue-500" />
          <h2 className="text-2xl font-semibold">
            Built for Digital Heroes Training task
          </h2>
        </div>
         <p className="mt-4 text-gray-400">
        <a href="https://digitalheroesco.com/" className="text-blue-400 hover:underline">
          Digital Heroes
        </a>
      </p>
    
        <p className="mt-4 text-gray-400">
          © 2026 Page Pulse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}