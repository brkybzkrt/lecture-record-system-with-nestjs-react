import mongoose, { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


import { CreateStudentDto } from './dto/student.dto';
import { Student } from './models/student.schema';
import { StudentInterface } from './student.interface';


@Injectable()
export class StudentService {
  //constructor(@InjectModel(Student.name) private studentModel: mongoose.Model<Student>) {}
constructor( @Inject('STUDENT_REPOSITORY')
private readonly studentRepository: StudentInterface<any>){}

  // async create(createStudentDto: CreateStudentDto): Promise<Student> {
  //   const createdStudent = new this.studentModel(createStudentDto);
  //   return createdStudent.save();
  // }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.findAll();
  }
}
