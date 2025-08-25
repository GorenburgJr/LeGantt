import { Body, Controller, Get, Param, Post, Query, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  loginUser(@Query('mode') mode: string) {
    return this.authService.loginUser(mode);
  }
}
