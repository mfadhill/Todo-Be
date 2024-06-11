import { Module } from '@nestjs/common';
import { ListService } from './list.service';
import { ListController } from './list.controller';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  controllers: [ListController],
  providers: [ListService, PrismaService, JwtModule],
})
export class ListModule { }

// imports: [
//   PassportModule,
//   JwtModule.register({
//     secret: jwtConstants.secret,
//     signOptions: { expiresIn: '60m' },
//   }),
//   PrismaModule,
// ],