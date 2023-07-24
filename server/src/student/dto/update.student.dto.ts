import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { CreateLectureDto } from 'src/lecture/dto/lecture.dtos';

export class UpdateStudentDto {

    @ApiProperty()
    @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
    @IsString({ message: i18nValidationMessage('validation.INVALID_STRING') })
    id:string;


    @ApiProperty()
    @ValidateNested()
    @IsDefined()
    @Type(() => CreateLectureDto)
    data:CreateLectureDto;
}