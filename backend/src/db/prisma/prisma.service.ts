import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        // this.$extends({
        //     result: {
        //         profile: {
        //             fullName: {
        //                 needs: { firstName: true, lastName: true },
        //                 compute(profile) {
        //                     return `${profile.firstName} ${profile.lastName}`;
        //                 },
        //             },
        //         },
        //     },
        // });
        await this.$connect();
        console.log("Prisma Initialized");
    }
}