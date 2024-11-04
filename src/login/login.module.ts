import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';

@Module({
  controllers: [LoginController],
  exports: [LoginController],
})
export class LoginModule {}
