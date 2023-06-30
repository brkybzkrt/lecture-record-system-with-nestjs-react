import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { Classroom } from 'src/classroom/models/classroom.schema';
import { FacultyMember } from 'src/faculty-member/models/faculty-member.schema';
import { Lecture } from 'src/lecture/models/lecture.schema';
import { Student } from 'src/student/models/student.schema';
const { randomUUID } = require('crypto');

export type LectureRecordDocument = HydratedDocument<LectureRecord>;

@Schema({ timestamps: true })
export class LectureRecord {
  @Prop({ type: SchemaTypes.ObjectId, ref: Lecture.name })
  lectureCode: Types.ObjectId;
  @Prop({ type: 'String', required: true, match: /[01]{1}/g })
  lectureType: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: FacultyMember.name })
  facultyMemberCode: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: Student.name })
  studentCode: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: Classroom.name })
  classroomCode: Types.ObjectId;

  @Prop()
  isDeleted: boolean;
}

export const LectureRecordSchema = SchemaFactory.createForClass(LectureRecord);
