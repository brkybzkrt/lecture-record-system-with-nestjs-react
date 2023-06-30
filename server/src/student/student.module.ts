import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './models/student.schema';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';

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
    providers:[StudentService,
      {
        provide: "STUDENT_REPOSITORY",
        useClass: StudentRepository,
      }]

})
export class StudentModule {}
