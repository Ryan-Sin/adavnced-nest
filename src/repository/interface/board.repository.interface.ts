import { BoardEntity } from 'src/entity/board.entity';

export interface BoardRepositoryInterface {
  save(id: number, name: string): number;
  findAll(): BoardEntity[];
}
