import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
import { IsOptional, Length } from 'class-validator';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsOptional()
    @Length(1, 128)
    name: string;
}
