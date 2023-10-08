"use client";

import Card from "@/components/Card";
import { tMusicData } from "@/schemas/musics.schema";
import api from "@/services/api";
import { GetServerSideProps, NextPage } from "next";
import { FormEvent, useState } from "react";

interface iHomeProps {
  musics: tMusicData[]
}

export default function Home({ musics }: iHomeProps) {

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
    <main className="body grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center p-24 min-h-screen">

      {musics.map(music =>
        <Card key={music.id} music={music} />
      )}

    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get<tMusicData[]>("/musics");
  return {
    props: { musics: response.data }
  };
};
