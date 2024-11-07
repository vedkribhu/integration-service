import { Controller, Get } from '@nestjs/common';


@Controller('login/facebook')
export class FacebookController {
  @Get('redirect')
  async redirect() {
    // Implement this with passport js
    passport
  }

  async login() {
    // TODO
    return 'login';
  }
}
