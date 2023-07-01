
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsDefined, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreateLectureDto{

    @ApiProperty()
    @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
    @IsString({ message: i18nValidationMessage('validation.INVALID_STRING') })
    name:string;

    @ApiProperty({required:true})
    @IsBoolean({ message: 'validation.INVALID_BOOLEAN' })
    isMandatory:boolean = false;
}


export class UpdateLectureDto{

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

export class DeleteLectureDto{
    @ApiProperty()
    @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
    @IsString({ message: i18nValidationMessage('validation.INVALID_STRING') })
    id:string;
}


