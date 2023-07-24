import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreateStudentDto{


    @ApiProperty()
    @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
    @IsString({ message: i18nValidationMessage('validation.INVALID_STRING') })
    firstName:string;


    @ApiProperty()
    @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
    @IsString({ message: i18nValidationMessage('validation.INVALID_STRING') })
    lastName:string;


    @ApiProperty()
    @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
    @IsString({ message: i18nValidationMessage('validation.INVALID_STRING') })
    email:string;

    @ApiProperty()
    @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
    @IsString({ message: i18nValidationMessage('validation.INVALID_STRING') })
    displayName:string;
}