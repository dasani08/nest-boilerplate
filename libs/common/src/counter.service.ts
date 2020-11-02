import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Counter } from './schema/counter.schema';

@Injectable()
export class CounterService {
  constructor(
    @InjectModel(Counter.name)
    private counterModel: Model<Counter>,
  ) {}

  async getCounter(key: string): Promise<number> {
    const counter = await this.counterModel.findOneAndUpdate(
      {
        key: key,
      },
      {
        $inc: { next: 1 },
      },
      { upsert: true },
    );

    return counter ? counter.next : 1;
  }
}
