import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/db/prisma/prisma.service';
import * as argon from "argon2"
import { ProfilesService } from 'src/profiles/profiles.service';


@Injectable()
export class UsersService {
  constructor(private db: PrismaService, private profilesService: ProfilesService) { }
  async create(createUserDto: CreateUserDto, file: Express.Multer.File) {
    const emailUnique = await this.db.user.findUnique({ where: { email: createUserDto.email } });
    if (emailUnique) {
      throw new BadRequestException("Email Address already exists");
    }
    const usernameUnique = await this.db.user.findUnique({ where: { username: createUserDto.username } });
    if (usernameUnique) {
      throw new BadRequestException("Username already exists");
    }
    createUserDto.password = await argon.hash(createUserDto.password);
    const { name, ...userObj } = createUserDto;
    const newUser = await this.db.user.create({ data: userObj });
    await this.profilesService.create({ name }, file, newUser);
    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
