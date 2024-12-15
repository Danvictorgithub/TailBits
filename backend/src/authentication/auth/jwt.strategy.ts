import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Strategy, ExtractJwt } from "passport-jwt"
import { PrismaService } from "src/db/prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly prisma: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || "thequickbrownfox",
        });
    };
    async validate(payload: any) {
        const updatedUser = await this.prisma.user.findUnique({
            where: { id: payload.id },
        })
        const { password, createdAt, updatedAt, ...userInfo } = { ...updatedUser };
        return userInfo;
    }
}