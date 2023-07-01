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
import { LectureService } from '../service/lecture.service';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import {
  CreateLectureDto,
  DeleteLectureDto,
  UpdateLectureDto,
} from '../dto/lecture.dtos';

@Controller('lecture')
@ApiBearerAuth('JWT-auth')
@ApiTags('lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Get('/findById/:id')
  findById(@Param('id') id: string) {
    return this.lectureService.findById(id);
  }
  @Get('/findAll')
  findAll() {
    return this.lectureService.findAll();
  }

  @Get('/findByCode/:code')
  findByCode(@Param('code') code: string) {
    return this.lectureService.findByCode(code);
  }

  // @UseGuards(AuthorizationGuard)
  @Post('/create')
  @ApiBody({ type: CreateLectureDto })
  create(@Body() data: CreateLectureDto) {
    return this.lectureService.create(data);
  }

  // @UseGuards(AuthorizationGuard)
  @Delete('/delete')
  @ApiBody({ type: DeleteLectureDto })
  delete(@Body('id') id: string) {
    return this.lectureService.delete(id);
  }

  // @UseGuards(AuthorizationGuard)
  @Patch('/update')
  @ApiBody({ type: UpdateLectureDto })
  update(@Body() data: UpdateLectureDto) {
    const { id, ...rest } = data;
    return this.lectureService.update(id, rest);
  }
}
