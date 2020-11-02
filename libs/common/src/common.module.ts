import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { UserService } from './user.service';

import SCHEMAS from './schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [CounterService, UserService],
  exports: [CounterService, UserService, MongooseModule.forFeature(SCHEMAS)],
  imports: [MongooseModule.forFeature(SCHEMAS)]
})
export class CommonModule {}
