"use client";

import {  useState } from "react";

export function usePlayer() {
  const [playerId,] = useState(() => {
    try {
      let id = localStorage.getItem("playerId");
      if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("playerId", id);
      }
      return id;
    } catch {
      return "";
    }
  });

  const [playerName, setPlayerName] = useState(() => {
    try {
      return localStorage.getItem("managerName") || "";
    } catch {
      return "";
    }
  });

  const updatePlayerName = (name: string) => {
    setPlayerName(name);
    localStorage.setItem("managerName", name);
  };

  return {
    playerId,
    playerName,
    setPlayerName: updatePlayerName,
  };
}