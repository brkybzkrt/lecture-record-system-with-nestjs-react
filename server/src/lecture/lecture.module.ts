import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LectureSchema } from './models/lecture.schema';
import { LectureController } from './controller/lecture.controller';
import { LectureService } from './service/lecture.service';
import { LectureRepository } from './repository/lecture.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports:[MongooseModule.forFeature(
        [
          {
           name: 'Lecture',
           schema: LectureSchema,
          },
         ]
       ),ConfigModule.forRoot()],
    controllers:[LectureController],
    providers:[LectureService, {
      provide: "LECTURE_REPOSITORY",
      useClass: LectureRepository,
    }]
})
export class LectureModule {}
