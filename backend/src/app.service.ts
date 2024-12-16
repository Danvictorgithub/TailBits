import { Injectable } from '@nestjs/common';
import { getSupabasePublicUrl } from './lib/supabasePublicUrl';

@Injectable()
export class AppService {
  getHello() {
    return { message: "Welcome to TailChro API v1.0.0" };
  }
}
