import mongoose, { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';



import { CreateStudentDto } from './dto/create.student.dto';
import { Student } from './models/student.schema';
import { StudentInterface } from './student.interface';


@Injectable()
export class StudentService {
constructor( @Inject('STUDENT_REPOSITORY')
private readonly studentRepository: StudentInterface){}

  async findAll() {
    return this.studentRepository.findAll();
  }

 async findById(id: string){
    return this.studentRepository.findById(id);
 }

 async findByCode(code: string){
    return this.studentRepository.findByCode(code);
 }

 async create (data: CreateStudentDto){
    return this.studentRepository.create(data);
 }

 async delete (id: any){
    return this.studentRepository.delete(id);
 }

 async update (id:string, data: any){
    return this.studentRepository.update(id, data);
 }
}
