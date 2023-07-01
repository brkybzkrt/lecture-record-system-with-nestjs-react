import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
const { randomUUID } = require('crypto');

export type LectureDocument = HydratedDocument<Lecture>;

@Schema({ timestamps: true })
export class Lecture {
  @Prop()
  name: string;

  @Prop({ type: 'Boolean', required: true, default: false })
  isMandatory: boolean;

  @Prop({ type: 'String', default: randomUUID() })
  code: string;

  @Prop({ type: 'Boolean', default: false })
  isDeleted: boolean;
}

export const LectureSchema = SchemaFactory.createForClass(Lecture);
