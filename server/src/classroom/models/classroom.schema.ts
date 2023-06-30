import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
const { randomUUID } = require('crypto');

export type FacultyMemberDocument = HydratedDocument<Classroom>;

@Schema({ timestamps: true })
export class Classroom {
  @Prop({ type: 'String', unique: true })
  name: string;

  @Prop({ type: 'String', default: randomUUID(), unique: true })
  code: string;

  @Prop({ type: 'Boolean', default: false })
  isDeleted: boolean;

  @Prop({ type: 'String', match: /[01]{1}/g, required: true })
  type: boolean;
}

export const ClassroomSchema = SchemaFactory.createForClass(Classroom);
