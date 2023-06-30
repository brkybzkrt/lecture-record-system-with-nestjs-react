import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
const { randomUUID } = require('crypto');

export type LectureDocument = HydratedDocument<Lecture>;

@Schema({ timestamps: true })
export class Lecture {
  @Prop()
  name: string;

  @Prop({ type: 'String', required: true, match: /[01]{1}/g, default: '0' })
  isMandatory: string;

  @Prop({ type: 'String', default: randomUUID() })
  code: string;

  @Prop({ type: 'Boolean', default: false })
  isDeleted: boolean;
}

export const LectureSchema = SchemaFactory.createForClass(Lecture);
