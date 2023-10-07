"use client";

import { FormEvent, useState } from "react";

export default function Home() {

  const [localStorage, setLocalStorage] = useState(getLocalStorage());

  function getLocalStorage() {
    if (typeof window !== "undefined") {
      const getLocalStorage: string | null = window.localStorage.getItem("@Musics_userToken");
      return JSON.parse(getLocalStorage!);
    } else {
      return null;
    };
  };

  console.log(localStorage);

  function addLocalStorage() {
    window.localStorage.setItem("@Musics_userToken", JSON.stringify("Musics!"));
  }

  function clearLocalStorage() {
    window.localStorage.removeItem("@Musics_userToken");
  }

  return (
    <main className="body flex min-h-screen flex-col items-center justify-between p-24">

      <h2>{localStorage}</h2>

      <button onClick={addLocalStorage}>Add LocalStorage!</button>
      <button onClick={clearLocalStorage}>Clear LocalStorage!</button>
    </main>
  )
}
