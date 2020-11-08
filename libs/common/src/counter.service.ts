import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Counter } from './schema/counter.schema';

@Injectable()
export class CounterService {
  async getCounter(key: string): Promise<number> {
    return 1;
  }
}
