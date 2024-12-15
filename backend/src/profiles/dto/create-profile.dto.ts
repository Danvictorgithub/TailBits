import { Length } from "class-validator";

export class CreateProfileDto {
    @Length(1, 128)
    name: string;
}
