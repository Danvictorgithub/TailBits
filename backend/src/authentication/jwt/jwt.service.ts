import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { WsException } from '@nestjs/websockets';
import { User } from '@prisma/client';
import * as jwt from "jsonwebtoken";

@Injectable()
export class JwtService {
    decode(token: string): User {
        try {
            return jwt.verify(token, process.env.JWT_SECRET || "thequickbrownfox") as User;
        } catch (error) {
            throw new UnauthorizedException("Invalid token");
        }
    }
    // decodeWs(token: string): User {
    //     try {
    //         return jwt.verify(token, process.env.JWT_SECRET || "thequickbrownfox") as User
    //     } catch (error) {
    //         throw new WsException("Invalid token");
    //     }
    // }
}
