import { Injectable } from '@nestjs/common';
import { getSupabasePublicUrl } from './lib/supabasePublicUrl';

@Injectable()
export class AppService {
  getHello() {
    return { message: "Welcome to TailChro API v1.0.0" };
  }

  upload(file: Express.MulterS3.File) {
    console.log(getSupabasePublicUrl(file.location))
    console.log(file.location)
    if (file) {
      return { message: "File uploaded" };
    }
    else {
      return { message: "No file uploaded" };
    }
  }
}
