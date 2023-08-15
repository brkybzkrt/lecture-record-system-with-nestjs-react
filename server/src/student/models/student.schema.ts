import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
const { randomUUID } = require('crypto');
import { Field, ObjectType } from '@nestjs/graphql';

export type StudentDocument = HydratedDocument<Student>;

@ObjectType()
@Schema({ timestamps: true })
export class Student {

  @Prop()
  @Field()
  firstName: string;

  @Prop()
  @Field()
  lastName: string;

  @Prop()
  @Field()
  displayName: string;

  @Prop({ unique: true, required: true })
  @Field()
  email: string;

  @Prop({ type: 'string', default: randomUUID() })
  @Field()
  code: string;

  @Prop({ type: 'Boolean', default: false })
  @Field()
  isDeleted: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
