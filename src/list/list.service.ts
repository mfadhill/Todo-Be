import { Injectable, UseGuards } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { PrismaService } from 'src/prisma.service';
import { List } from '@prisma/client';
import { JwtAuthGuard } from 'src/lib/db/authGuard';

@UseGuards(JwtAuthGuard)
@Injectable()
export class ListService {

  constructor(
    private readonly prisma: PrismaService
  ) { }

  async create(createListDto: CreateListDto, userId: string) {
    return await this.prisma.list.create({
      data: {
        content: createListDto.content,
        userId: userId
      }
    });

  }


  async findAll(): Promise<List[]> {
    return await this.prisma.list.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.list.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updateListDto: UpdateListDto) {
    const list = await this.prisma.list.update({
      where: { id: id },
      data: updateListDto
    });
    return list
  }

  async remove(id: string) {
    return await this.prisma.list.delete({ where: { id: id } })
  }
}
