import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
const { randomUUID } = require('crypto');

export type StudentDocument = HydratedDocument<Student>;

@Schema({ timestamps: true })
export class Student {
  @Prop()
  firstName: string;

  @Prop()
  lastName: number;

  @Prop()
  displayName: number;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ type: 'string', default: randomUUID() })
  code: string;

  @Prop({ type: 'Boolean', default: false })
  isDeleted: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
