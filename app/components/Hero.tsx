"use client";
import { usePlayer } from "../hooks/usePlayer";
import { useEffect } from "react";

export default function Hero() {
  const { playerName, setPlayerName } = usePlayer();

  useEffect(() => {
    const savedManager = localStorage.getItem("managerName");

    if (savedManager) {
      setPlayerName(savedManager);
    }
  }, [setPlayerName]);

  

  const handleManagerChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    setPlayerName(value);

    localStorage.setItem("managerName", value);
  };

  return (
    <section className="flex flex-col items-center text-center py-16">

      <span className="text-green-400 tracking-widest uppercase">
        ● En vivo: Mercado de transferencias
      </span>

      <h1 className="text-6xl font-black mt-8">
        SUBASTA{" "}
        <span className="text-green-400">
          FUTBOLERA
        </span>
      </h1>

      <p className="max-w-2xl text-gray-300 mt-6">
        Construye tu equipo ideal en subastas épicas con amigos.
      </p>

      <div className="w-full max-w-md mt-10 border border-green-900 rounded-xl p-6 bg-black/20 backdrop-blur">

        <label className="block text-left mb-2 text-sm ">
          Tu nombre de manager
        </label>

        <input
          value={playerName}
          onChange={handleManagerChange}
          placeholder="Ej: Pep_Guardiola"
          maxLength={20}
          required
          className="w-full bg-black border border-green-900 rounded-md px-4 py-3 "
        />

         <button
          className="w-full bg-green-400 text-black font-bold py-3 rounded-md mt-6 hover:bg-green-800 transition-colors duration-200 cursor-pointer"
        >
          Crear Sala
        </button>

        <button
          className="w-full border border-green-700 py-3 rounded-md mt-3 hover:bg-green-800 transition-colors duration-200 cursor-pointer"
        >
          Unirse a Sala
        </button>


      </div>

    </section>
  );
}