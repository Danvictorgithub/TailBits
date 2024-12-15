import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { RequestUser } from 'src/interfaces/requestUser';

@Injectable()
export class ProfileOwnerGuard implements CanActivate {
  constructor(private db: PrismaService) { }

  async checkProfile(user: User) {
    const profile = await this.db.profile.findFirst({ where: { userId: user.id } });
    if (!profile) {
      throw new BadRequestException("Profile not found");
    }
    return true;
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: RequestUser = context.switchToHttp().getRequest();
    return this.checkProfile(request.user);
  }
}