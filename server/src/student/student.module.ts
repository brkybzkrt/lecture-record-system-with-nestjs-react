import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './models/student.schema';
import { StudentService } from './student.service';

@Module({
    imports:[MongooseModule.forFeature(
        [
          {
           name: 'Student',
           schema: StudentSchema,
          },
         ]
       ),],
    controllers:[],
    providers:[StudentService]

})
export class StudentModule {}
