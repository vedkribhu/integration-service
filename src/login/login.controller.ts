import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
  @Get('redirect')
  async redirect() {
    return 'redirect';
  }
}
