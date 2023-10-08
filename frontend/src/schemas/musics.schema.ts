import { z } from "zod";

export const musicSchema = z.object({
    id: z.string(),
    name: z.string(),
    album: z.string(),
    artist: z.string(),
    genre: z.string(),
    year: z.string(),
    conver_image: z.string(),
    music_url: z.string()
});

export type tMusicData = z.infer<typeof musicSchema>;