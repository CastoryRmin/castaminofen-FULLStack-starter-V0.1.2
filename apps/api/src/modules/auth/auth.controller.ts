import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { RegisterPayload } from './interfaces/auth.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() payload: RegisterPayload) {
    return this.authService.register(payload);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() payload: { email: string; password: string }) {
    return this.authService.login(payload);
  }
}
