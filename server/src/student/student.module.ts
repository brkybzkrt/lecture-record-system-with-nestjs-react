import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './models/student.schema';
import { StudentService } from './student.service';
import { StudentRepository } from './student.repository';
import { StudentsResolver } from './resolver/student.resolver';
import { StudentController } from './controller/student.controller';

@Module({
    imports:[MongooseModule.forFeature(
        [
          {
           name: 'Student',
           schema: StudentSchema,
          },
         ]
       ),],
    controllers:[StudentController],
    providers:[StudentService,StudentsResolver,
      {
        provide: "STUDENT_REPOSITORY",
        useClass: StudentRepository,
      }]

})
export class StudentModule {}
