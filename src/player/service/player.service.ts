import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerEntity } from '../models/player.entity';
import { Repository } from 'typeorm';
import { PlayerI } from '../models/player.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
  ) {}

  add(player: PlayerI): Observable<PlayerI> {
    return from(this.playerRepository.save(player));
  }

  findAll(): Observable<PlayerI[]> {
    return from(this.playerRepository.find());
  }
}
