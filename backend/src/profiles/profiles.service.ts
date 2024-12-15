import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/db/prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class ProfilesService {
  constructor(private db: PrismaService) { }
  async create(createProfileDto: CreateProfileDto, file: Express.Multer.File, user: User) {

    // Generates Intiials Image from DiceBear if no image uploaded already
    const image = file ? file.path : `https://api.dicebear.com/9.x/initials/svg?seed=${createProfileDto.name}`;
    const newProfile = await this.db.profile.create({ data: { ...createProfileDto, image, user: { connect: { id: user.id } } } });
    return newProfile;
  }

  findAll() {
    return `This action returns all profiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
