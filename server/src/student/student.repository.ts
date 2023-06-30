import { Injectable } from "@nestjs/common";
import { Student } from "./models/student.schema";
import { StudentInterface } from "./student.interface";
import mongoose from "mongoose";
import { InjectModel } from "@nestjs/mongoose";




@Injectable()
export class StudentRepository implements StudentInterface<Student> {

    constructor(@InjectModel(Student.name) private studentModel: mongoose.Model<Student>) {}


    findAll() {
        return ""
    }




}