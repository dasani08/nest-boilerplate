import { Schema, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Counter extends Document {
  @Prop()
  key: string;
  @Prop()
  next: number;
}

export const CounterSchema = new mongoose.Schema(
  {
    key: mongoose.Schema.Types.String,
    next: mongoose.Schema.Types.String,
  },
  { collection: 'counters', timestamps: true },
);

export default {
  name: Counter.name,
  schema: CounterSchema,
};
