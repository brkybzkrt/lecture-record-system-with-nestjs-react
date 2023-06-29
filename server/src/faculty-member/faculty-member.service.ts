import mongoose, { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


import { FacultyMember } from './models/faculty-member.schema';
import { CreateFacultyMemberDto } from './dto/faculty-member.dto';

@Injectable()
export class FacultyMemberService {
  constructor(@InjectModel(FacultyMember.name) private facultyMemberModel: mongoose.Model<FacultyMember>) {}


  async create(createFacultyMemberDto: CreateFacultyMemberDto): Promise<FacultyMember> {
    const createdFacultyMember = new this.facultyMemberModel(createFacultyMemberDto);
    return createdFacultyMember.save();
  }

  async findAll(): Promise<FacultyMember[]> {
    return this.facultyMemberModel.find().exec();
  }
}
