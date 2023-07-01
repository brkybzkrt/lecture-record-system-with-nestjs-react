import mongoose from 'mongoose';
import { Lecture } from '../models/lecture.schema';
import { LectureInterface } from './../interface/lecture.interface';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, Injectable } from '@nestjs/common';
import { CreateLectureDto } from '../dto/lecture.dtos';


@Injectable()
export class LectureRepository implements LectureInterface {
  constructor(
    @InjectModel(Lecture.name) private lectureModel: mongoose.Model<Lecture>,
  ) {}

  async findById(id: string) {
    try {
      const lecture = await this.lectureModel.findById(id);
      return lecture;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
  async findByCode(code: string) {
    try {
      const lecture = await this.lectureModel.findOne({
        code,
        isDeleted: false,
      });
      return lecture;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
  findAll() {
    try {
      const lectures = this.lectureModel.find({ isDeleted: false });
      return lectures;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
  async create(data: CreateLectureDto) {
    try {
      const isLectureExists = await this.lectureModel.findOne({name: data.name});
      if(isLectureExists){
        throw new HttpException("lecture_already_exists",400);
      }
      const lecture = await this.lectureModel.create(data);
      return lecture;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
  async delete(id: string) {
    try {
      const lecture = await this.lectureModel.findOne({
        _id: id,
        isDeleted: false,
      });
      if (!lecture) throw new HttpException('Lecture not found', 404);
      else {
        return await this.lectureModel.updateOne(
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
      const lecture = await this.lectureModel.findOne({
        _id: id,
        isDeleted: false,
      });
      if (!lecture) throw new HttpException('Lecture not found', 404);
      else {
         const updated= await this.lectureModel.updateOne({ _id: id }, {...data?.data});
         return updated;
        }
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
