import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerService } from '../service/player.service';
import { PlayerI } from '../models/player.interface';
import { Observable } from 'rxjs';

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Post()
  add(@Body() player: PlayerI): Observable<PlayerI> {
    return this.playerService.add(player);
  }
  @Get()
  findAll(): Observable<PlayerI[]> {
    return this.playerService.findAll();
  }
}
