import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { LoginController } from './login/login.controller';

@Module({
  imports: [LoginModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
