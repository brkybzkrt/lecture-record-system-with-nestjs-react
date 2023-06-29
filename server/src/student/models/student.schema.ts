import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
const { randomUUID } = require('crypto');

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {

  @Prop()
  firstName: string;

  @Prop()
  lastName: number;

  @Prop()
  displayName: number;

  @Prop()
  email: string;

  @Prop({type: 'string',default:randomUUID()})
  code:string;

  @Prop()
  createdAt:string;

  @Prop()
  isDeleted:boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);