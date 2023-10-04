import { CreateMusicDto } from "../../dto/create-music.dto";
import { Music } from "../../entities/musics.entities";
import { MusicsRepository } from "../musics.repository";


export class MusicsInMemoryRepository implements MusicsRepository {

    private dataBase: Music[] = [];

    async create(data: CreateMusicDto): Promise<Music> {
        const newMusic = new Music();

        Object.assign(newMusic, {
            ...data
        })
        this.dataBase.push(newMusic);

        return newMusic;
    }

    async getAll(): Promise<Music[]> {

        return this.dataBase;
    }

    async getOne(musicId: string): Promise<Music> {

        const musicFound = this.dataBase.find(music => music.id === musicId);

        return musicFound;
    }

}