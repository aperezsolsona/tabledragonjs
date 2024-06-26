import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class PlayerEntity {
  @PrimaryColumn()
  id: string;
  @Column()
  name: string;
  @Column()
  number: string;
}
