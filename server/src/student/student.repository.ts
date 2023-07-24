import { HttpException, Injectable } from "@nestjs/common";
import { Student } from "./models/student.schema";
import { StudentInterface } from "./student.interface";
import mongoose from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateStudentDto } from "./dto/create.student.dto";




@Injectable()
export class StudentRepository implements StudentInterface {

    constructor(@InjectModel(Student.name) private studentModel: mongoose.Model<Student>) {}


    findAll() {
        try {
          const lectures = this.studentModel.find({ isDeleted: false });
          return lectures;
        } catch (error) {
          throw new HttpException(error, 500);
        }
      }

      async findById(id: string) {
        try {
          const lecture = await this.studentModel.findById(id);
          return lecture;
        } catch (error) {
          throw new HttpException(error, 500);
        }
      }

      async findByCode(code: string) {
        try {
          const lecture = await this.studentModel.findOne({
            code,
            isDeleted: false,
          });
          return lecture;
        } catch (error) {
          throw new HttpException(error, 500);
        }
      }

      async create(data: CreateStudentDto) {
        try {
          const isStudentExists = await this.studentModel.findOne({email: data.email});
          if(isStudentExists){
            throw new HttpException("student_already_exists",400);
          }
          const student = await this.studentModel.create(data);
          return student;
        } catch (error) {
          throw new HttpException(error, 500);
        }
      }

      async delete(id: string) {
        try {
          const student = await this.studentModel.findOne({
            _id: id,
            isDeleted: false,
          });
          if (!student) throw new HttpException('Student not found', 404);
          else {
            return await this.studentModel.updateOne(
              { _id: id },
              { isDeleted: true },
            );
    
          }
        } catch (error) {
          throw new HttpException(error, 500);
        }
      }


      async update(id: string, data: any) {
        try {
          const student = await this.studentModel.findOne({
            _id: id,
            isDeleted: false,
          });
          if (!student) throw new HttpException('Student not found', 404);
          else {
             const updated= await this.studentModel.updateOne({ _id: id }, {...data?.data});
             return updated;
            }
        } catch (error) {
          throw new HttpException(error, 500);
        }
      }

}