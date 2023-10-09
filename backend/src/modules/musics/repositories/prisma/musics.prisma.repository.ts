import { PrismaService } from "src/database/prisma.service";
import { CreateMusicDto } from "../../dto/create-music.dto";
import { Music } from "../../entities/musics.entities";
import { MusicsRepository } from "../musics.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MusicsPrismaRepository implements MusicsRepository {

    constructor(private prisma: PrismaService) { }

    async create(data: CreateMusicDto): Promise<Music> {

        const newMusic = new Music();

        Object.assign(newMusic, {
            ...data,
        });

        const saveMusic = await this.prisma.music.create({
            data: {
                id: newMusic.id,
                album: newMusic.album,
                artist: newMusic.artist,
                genre: newMusic.genre,
                name: newMusic.name,
                year: newMusic.year,
                cover_image: newMusic.cover_image,
                music_url: newMusic.music_url,
                userId: newMusic.userId,
            },
        });

        return saveMusic;
    }

    async getAll(): Promise<Music[]> {

        const allMusics = await this.prisma.music.findMany();

        return allMusics;
    }

    async getOne(musicId: string): Promise<Music> {

        const musicFound = await this.prisma.music.findUnique({
            where: {
                id: musicId
            }
        });

        return musicFound;
    }

}