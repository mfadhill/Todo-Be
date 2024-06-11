import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.login(body)
  }

  @Post('register')
  async register(@Body() body: CreateAuthDto) {
    return this.authService.register(body)
  }
}