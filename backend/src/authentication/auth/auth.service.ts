import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from "bcrypt";
import { PrismaService } from 'src/db/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
    ) { }
    // Authenticates email and Password
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.prisma.user.findUnique({ where: { email } });
        const result = (user) ? bcrypt.compareSync(password, user.password) : false;
        if (user && result) {
            if (user.isVerified) {
                const { password, ...result } = user;
                return result;
            }
            else {
                throw new UnauthorizedException("Please verify your email address");
            }
        }
        throw new UnauthorizedException("Invalid email or password");
    }
    // Returns JWT Bearer Token
    async login(user: any) {
        const payload = user;
        return {
            // Calls Passport JWTStrategy
            access_token: this.jwtService.sign(payload)
        }
    }
}
