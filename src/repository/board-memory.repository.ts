import { Logger } from '@nestjs/common';
import { BoardEntity } from 'src/entity/board.entity';
import { BoardRepositoryInterface } from './interface/board.repository.interface';

export class BoardMemoryRepository implements BoardRepositoryInterface {
  private boardList: BoardEntity[] = [];

  /**
   * @author Ryan
   * @description 게시판 등록
   *
   * @param id 게시판 아이디
   * @param name 게시판 이름
   *
   * @returns 게시판 아이디
   */
  save(id: number, name: string): number {
    Logger.log('메모리 DB -> 데이터 저장');

    const board = new BoardEntity();

    board.id = id;
    board.name = name;

    this.boardList.push(board);

    return id;
  }

  /**
   * @author Ryan
   * @description 게시글 전체 조회
   *
   * @returns 게시글 리스트
   */
  findAll(): BoardEntity[] {
    Logger.log('메모리 DB -> 데이터 조회');

    return this.boardList;
  }
}
