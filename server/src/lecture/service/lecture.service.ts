import mongoose, { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';



import { LectureInterface } from '../interface/lecture.interface';
import { CreateLectureDto } from '../dto/lecture.dtos';


@Injectable()
export class LectureService {
constructor( @Inject('LECTURE_REPOSITORY')
private readonly lectureRepository: LectureInterface){}

 findById(id: string){
    return this.lectureRepository.findById(id);
 }
 findAll(){
    return this.lectureRepository.findAll();
 }

 findByCode(code: string){
    return this.lectureRepository.findByCode(code);
 }

 create (data: CreateLectureDto){
    return this.lectureRepository.create(data);
 }

 delete (id: any){
    return this.lectureRepository.delete(id);
 }

 update (id:string, data: any){
    return this.lectureRepository.update(id, data);
 }

}
