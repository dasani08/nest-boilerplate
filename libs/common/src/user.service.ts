import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findByUserId(id: string) {
    return {
      type: '',
    };
  }
}
