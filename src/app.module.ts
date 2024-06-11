import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ListModule } from './list/list.module';

@Module({
  imports: [AuthModule, ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
