import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { MusicsService } from "./musics.service";

@Controller("musics")
export class MusicsController {
    constructor(private musicsService: MusicsService) { }

    @Post()
    create(@Body() data: any) {
        return this.musicsService.create(data);
    }

    @Get()
    getAll() {
        return this.musicsService.getAll();
    }

    @Get(":musicId")
    getOne(@Param("musicId") musicId: string) {
        return this.musicsService.getOne(musicId);
    }
}