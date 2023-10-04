import { CreateMusicDto } from "../dto/create-music.dto";
import { Music } from "../entities/musics.entities";


export abstract class MusicsRepository {

    abstract create(data: CreateMusicDto): Promise<Music>;

    abstract getAll(): Promise<Music[]>;

    abstract getOne(musicId: string): Promise<Music>;
}