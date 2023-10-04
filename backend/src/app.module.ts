import { Module } from '@nestjs/common';
import { MusicsModule } from './modules/musics/musics.module';

@Module({
  imports: [MusicsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
