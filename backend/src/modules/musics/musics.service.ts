import { Injectable, NotFoundException } from "@nestjs/common"
import { CreateMusicDto } from "./dto/create-music.dto"
import { MusicsRepository } from "./repositories/musics.repository"

@Injectable()
export class MusicsService {

    constructor(private musicRepository: MusicsRepository) { }

    async create(data: CreateMusicDto) {
        return this.musicRepository.create(data);
    }

    async getAll() {
        return this.musicRepository.getAll();
    }

    async getOne(musicId: string) {
        const musicFound = await this.musicRepository.getOne(musicId);

        if (!musicFound) {
            throw new NotFoundException("Music not found");
        }

        return musicFound;
    }
}