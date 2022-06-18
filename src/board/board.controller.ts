import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
//특정 Controller에 Interceoptor 적용
// @UseInterceptors(LoggingInterceptor)
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
  //특정 Controller Route에 Interceoptor 적용
  // @UseInterceptors(LoggingInterceptor)
  getBoardList() {
    return this.boardService.getBoardList();
  }
}
