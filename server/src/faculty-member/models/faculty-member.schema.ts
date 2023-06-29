import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
const { randomUUID } = require('crypto');

export type FacultyMemberDocument = HydratedDocument<FacultyMember>;

@Schema()
export class FacultyMember {

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

export const FacultyMemberSchema = SchemaFactory.createForClass(FacultyMember);