import { PrismaService } from "src/database/prisma.service";
import { CreateMusicDto } from "../../dto/create-music.dto";
import { Music } from "../../entities/musics.entities";
import { MusicsRepository } from "../musics.repository";


export class MusicsPrismaRepository implements MusicsRepository {

    constructor(private prisma: PrismaService) { }

    async create(data: CreateMusicDto): Promise<Music> {

        const newMusic = new Music();

        Object.assign(newMusic, {
            data: { ...data }
        });

        const saveMusic = await this.prisma.music.create({
            data: {
                ...newMusic,
                userId: newMusic.userId
            }
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