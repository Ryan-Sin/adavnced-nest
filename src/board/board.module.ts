import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { BoardMemoryRepository } from 'src/repository/board-memory.repository';
import { BoardDiskRepository } from 'src/repository/board-disk.repository';

/**
 * @author Ryan
 * @description providers에 정의한 키와 useClass에 정의한 값을 통해 IoC Container에 등록되 사용된다.
 *
 * 중요한 포인트는 providers는 Key, useClass는 Value를 뜻 한다.(useClass는 당연히 Class 정보를 등록한다.)
 * 단순 상수를 등록한다면 useValue를 선언해서 사용한다.
 */
@Module({
  providers: [
    BoardService,
    {
      provide: 'BoardRepository', //Inject() 이름을 설정한다.
      // useClass: BoardMemoryRepository, // 메모리 데이터베이스 사용
      useClass: BoardDiskRepository, // 디스크 데이터베이스 사용
    },
  ],
  controllers: [BoardController],
})
export class BoardModule {}
