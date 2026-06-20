"use client";

import { useState } from "react";

export default function Hero() {
  const [manager, setManager] = useState("");

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

        <label className="block text-left mb-2 text-sm">
          Tu nombre de manager
        </label>

        <input
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          placeholder="Ej: Pep_Guardiola"
          className="w-full bg-black border border-green-900 rounded-md px-4 py-3"
        />

        <button
          className="w-full bg-green-400 text-black font-bold py-3 rounded-md mt-6"
        >
          Crear Sala
        </button>

        <button
          className="w-full border border-green-700 py-3 rounded-md mt-3"
        >
          Unirse a Sala
        </button>

      </div>

    </section>
  );
}