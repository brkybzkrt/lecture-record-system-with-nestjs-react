import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LectureRecordSchema } from './models/lecture-record.schema';

@Module({
    imports:[MongooseModule.forFeature(
        [
          {
           name: 'LectureRecord',
           schema: LectureRecordSchema,
          },
         ]
       ),],
    controllers:[],
    providers:[]
})
export class LectureRecordModule {}
