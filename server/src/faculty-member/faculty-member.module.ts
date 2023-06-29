import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { FacultyMember, FacultyMemberSchema } from './models/faculty-member.schema';
import { FacultyMemberService } from './faculty-member.service';

@Module({
    imports:[MongooseModule.forFeature(
        [
          {
           name: 'FacultyMember',
           schema: FacultyMemberSchema,
          },
         ]
       ),],
    controllers:[],
    providers:[FacultyMemberService]

})
export class FacultyMemberModule {}
