import { Trophy } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex items-center gap-2">
        <Trophy className="text-green-400" />

        <h1 className="font-bold text-xl">
          Subasta Futbolera
        </h1>
      </div>
    </header>
  );
}