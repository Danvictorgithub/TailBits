import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/db/prisma/prisma.module';
import { ProfilesService } from 'src/profiles/profiles.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ProfilesService],
  imports: [PrismaModule]
})
export class UsersModule { }
