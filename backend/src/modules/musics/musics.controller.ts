import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { MusicsService } from "./musics.service";

@Controller("musics")
export class MusicsController {
    constructor(private musicsService: MusicsService) { }

    @Post()
    async create(@Body() data: any) {
        return await this.musicsService.create(data);
    }

    @Get()
    async getAll() {
        return await this.musicsService.getAll();
    }

    @Get(":musicId")
    async getOne(@Param("musicId") musicId: string) {
        return await this.musicsService.getOne(musicId);
    }
}