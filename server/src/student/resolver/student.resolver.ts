import { Resolver,Query } from "@nestjs/graphql";
import { Student } from "../models/student.schema";
import { StudentService } from "../student.service";




@Resolver(() => Student)
export class StudentsResolver {

    constructor(private readonly studentService: StudentService){

    }


    @Query(()=>[Student],{name:'students'})
    async findAll(){
            return this.studentService.findAll();
            
    }

}