import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { FacebookController } from './login/facebook/facebook.controller';

@Module({
  imports: [LoginModule],
  controllers: [AppController, FacebookController],
  providers: [AppService],
})
export class AppModule {}
