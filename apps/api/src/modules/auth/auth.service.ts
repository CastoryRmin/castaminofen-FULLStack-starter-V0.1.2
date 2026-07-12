import { Injectable } from '@nestjs/common';

import { AuthService as SharedAuthService, InMemoryUserRepository } from '@castaminofen/auth';

@Injectable()
export class AuthService {
  private readonly sharedAuthService: SharedAuthService;

  constructor() {
    this.sharedAuthService = new SharedAuthService(new InMemoryUserRepository());
  }

  async register(input: { name?: string; email: string; password: string }) {
    return this.sharedAuthService.register({
      name: input.name ?? 'Listener',
      email: input.email,
      password: input.password,
    });
  }

  async login(input: { email: string; password: string }) {
    return this.sharedAuthService.login(input);
  }
}
