import mongoose from 'mongoose';
import { Lecture } from '../models/lecture.schema';
import { LectureInterface } from './../interface/lecture.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';



@Injectable()
export class LectureRepository implements LectureInterface {

    constructor(@InjectModel(Lecture.name) private lectureModel: mongoose.Model<Lecture>) {}


    findById(id: string) {
        throw new Error('Method not implemented.');
    }
    findByCode(code: string) {
        throw new Error('Method not implemented.');
    }
    findAll() {
        throw new Error('Method not implemented.');
    }
    create(data: any) {
        throw new Error('Method not implemented.');
    }
    delete(id: string) {
        throw new Error('Method not implemented.');
    }
    update(id: string, data: any) {
        throw new Error('Method not implemented.');
    }

}