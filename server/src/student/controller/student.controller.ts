import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
  } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';


import { StudentService } from '../student.service';
import { CreateStudentDto } from '../dto/create.student.dto';
import { UpdateStudentDto } from '../dto/update.student.dto';
import { DeleteStudentDto } from '../dto/delete.student.dto';
  
  @Controller('student')
  @ApiBearerAuth('JWT-auth')
  @ApiTags('student')
  export class StudentController {
    constructor(private readonly studentService: StudentService) {}
  
    @Get('/findById/:id')
    findById(@Param('id') id: string) {
      return this.studentService.findById(id);
    }
    @Get('/findAll')
    findAll() {
      return this.studentService.findAll();
    }
  
    @Get('/findByCode/:code')
    findByCode(@Param('code') code: string) {
      return this.studentService.findByCode(code);
    }
  
    // @UseGuards(AuthorizationGuard)
    @Post('/create')
    @ApiBody({ type: CreateStudentDto })
    create(@Body() data: CreateStudentDto) {
      return this.studentService.create(data);
    }
  
    // @UseGuards(AuthorizationGuard)
    @Delete('/delete')
    @ApiBody({ type: DeleteStudentDto })
    delete(@Body('id') id: string) {
      return this.studentService.delete(id);
    }
  
    // @UseGuards(AuthorizationGuard)
    @Patch('/update')
    @ApiBody({ type: UpdateStudentDto })
    update(@Body() data: UpdateStudentDto) {
      const { id, ...rest } = data;
      return this.studentService.update(id, rest);
    }
  }
  