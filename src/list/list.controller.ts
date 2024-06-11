import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { JwtAuthGuard } from 'src/lib/db/authGuard';
import { log } from 'console';

@UseGuards(JwtAuthGuard)
@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createListDto: CreateListDto, @Request() req) {
    console.log(req.user)
    return await this.listService.create(createListDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.listService.findAll();
  }

  @Get('detail/:id')
  findOne(@Param('id') id: string) {
    return this.listService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listService.update(id, updateListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listService.remove(id);
  }
}
