import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LectureSchema } from './models/lecture.schema';

@Module({
    imports:[MongooseModule.forFeature(
        [
          {
           name: 'Lecture',
           schema: LectureSchema,
          },
         ]
       ),],
    controllers:[],
    providers:[]
})
export class LectureModule {}
