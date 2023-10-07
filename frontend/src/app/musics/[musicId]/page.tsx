"use client";
import { useRouter, useParams } from "next/navigation";
import path from "path";


export default function MusicByIdPage() {
    const route = useParams();
    const { musicId } = route;
    return (
        <h1>Music Id: {musicId}</h1>
    )
}