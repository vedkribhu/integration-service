import { Module } from '@nestjs/common';
// import { LoginController } from './login.controller';
import { FacebookModule } from './facebook/facebook.module';

@Module({
  controllers: [],
  exports: [],
  imports: [FacebookModule],
})
export class LoginModule {}
