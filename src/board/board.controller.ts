import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  /**
   * @author Ryan
   * @description 게시글 등록
   *
   * @param createBoardDto 게시글 생성 DTO
   * @returns 게시글 고유 아이디
   */
  @Post('')
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    const boardId = this.boardService.createBoard(createBoardDto);

    return boardId;
  }

  /**
   * @author Ryan
   * @description 게시글 전체 조회
   *
   * @returns 게시글 정보 리스트
   */
  @Get('')
  getBoardList() {
    return this.boardService.getBoardList();
  }
}
