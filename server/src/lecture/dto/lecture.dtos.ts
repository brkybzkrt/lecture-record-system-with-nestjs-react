
import { ApiProperty } from '@nestjs/swagger';

export class CreateLectureDto{

    @ApiProperty()
    name:string;

    @ApiProperty({required:true})
    isMandatory:boolean = false;
}


export class UpdateLectureDto{

    @ApiProperty()
    id:string;

    @ApiProperty()
    data:CreateLectureDto;
}

export class DeleteLectureDto{
    @ApiProperty()
    id:string;
}


