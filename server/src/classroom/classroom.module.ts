import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassroomSchema } from './models/classroom.schema';

@Module({
    imports:[MongooseModule.forFeature(
        [
          {
           name: 'Classroom',
           schema: ClassroomSchema,
          },
         ]
       ),],
    controllers:[],
    providers:[]
})
export class ClassroomModule {}
