import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './authentication/auth/auth.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [UsersModule, AuthModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
