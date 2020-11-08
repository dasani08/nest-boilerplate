import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { CounterService } from './counter.service';
import { UserService } from './user.service';

import ENTITIES from './entities';

@Module({
  providers: [CounterService, UserService],
  exports: [CounterService, UserService],
  imports: [
    MikroOrmModule.forRoot({
      entities: ENTITIES,
      dbName: 'my-db-name',
      type: 'mongo',
      clientUrl: 'mongodb://localhost:27017',
    }),
  ],
})
export class CommonModule {}
