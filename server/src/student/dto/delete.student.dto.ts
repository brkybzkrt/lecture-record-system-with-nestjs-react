import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class DeleteStudentDto{


    @ApiProperty()
    @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
    @IsString({ message: i18nValidationMessage('validation.INVALID_STRING') })
    id:string;
}