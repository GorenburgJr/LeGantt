import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  loginUser(mode: string): string {
    return 'brah';
  }
}
