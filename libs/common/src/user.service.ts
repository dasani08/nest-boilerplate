import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ContextService } from '@app/core';
import { Model } from 'mongoose';
import { User } from './schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findByUserId(userId: string): Promise<User> {
    const userKey = `user_${userId}`;
    let user = ContextService.get<User>(userKey);
    if (!user) {
      user = await this.userModel.findOne({ userId }).exec();
      ContextService.set(userKey, user);
    }
    return user;
  }
}
