import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
const { randomUUID } = require('crypto');

export type FacultyMemberDocument = HydratedDocument<FacultyMember>;

@Schema({ timestamps: true })
export class FacultyMember {
  @Prop()
  firstName: string;

  @Prop()
  lastName: number;

  @Prop()
  displayName: number;

  @Prop({ isRequired: true, unique: true })
  email: string;

  @Prop({ type: 'String', default: randomUUID() })
  code: string;

  @Prop({ type: 'Boolean', default: false })
  isDeleted: boolean;
}

export const FacultyMemberSchema = SchemaFactory.createForClass(FacultyMember);
