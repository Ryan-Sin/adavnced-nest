import { Inject, Injectable } from '@nestjs/common';
import { BoardRepositoryInterface } from 'src/repository/interface/board.repository.interface';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  constructor(
    //board.module에서 선언한 provide Inject 값을 가져온다.
    @Inject('BoardRepository')
    private boardRepository: BoardRepositoryInterface,
  ) {}

  /**
   * @author Ryan
   * @description 게시글 등록
   *
   * @param createBoardDto 게시글 등록 DTO
   * @returns 게시글 고유 아이디
   */
  createBoard(createBoardDto: CreateBoardDto): number {
    const { id, name } = createBoardDto;

    const boardId = this.boardRepository.save(id, name);

    return boardId;
  }

  /**
   * @author Ryan
   * @description 게시글 전체 조회
   *
   * @returns 게시글 정보 리스트
   */
  getBoardList() {
    return this.boardRepository.findAll();
  }
}
