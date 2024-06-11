import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }
  async create(createAuthDto: CreateAuthDto) {
    const createUser = {
      username: createAuthDto.username,
      email: createAuthDto.email,
      password: createAuthDto.password
    }
    return await this.prisma.auth.create({ data: createUser })
  }

  async findAll(): Promise<AuthService[] | []> {
    return await this.prisma.auth.findMany()
  }

  async findOne(id: string): Promise<AuthService> {
    return await this.prisma.auth.findUnique({ where: { id } });
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
