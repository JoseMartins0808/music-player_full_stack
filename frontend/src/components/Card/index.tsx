import { tMusicData } from "@/schemas/musics.schema";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";

interface iCardProps {
    music: tMusicData
}

export default function Card({ music }: iCardProps) {

    return (
        <li className="flex flex-row justify-items-end bg-pink-800 w-72 h-64 rounded-md">
            <div className="flex flex-col items-center min-w-56">
                <p className="m-3 text-xl">{music.name}</p>
                <Image className="m-4 mb-2 h-[11.5rem]" width={209} height={186} src={music.conver_image} alt="music image" />
            </div>
            <div className="min-w-16 bg-gray-100 flex justify-center rounded-e-lg">
                <button>
                    <BsFillPlayCircleFill className="fill-pink-500 w-10 h-10 m-1" />
                </button>
            </div>
        </li>
    );
};