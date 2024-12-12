import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: "Welcome to TailChro API v1.0.0" };
  }
}
