import * as mongoose from 'mongoose';
import { Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  type: string;
}

export const UserSchema = new mongoose.Schema(
  {
    type: mongoose.Schema.Types.String,
  },
  { timestamps: true },
);

export default {
  name: User.name,
  schema: UserSchema,
};
