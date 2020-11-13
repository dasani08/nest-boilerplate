import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./dist/libs/entities'],
      entitiesTs: ['./src/libs/entities'],
      dbName: 'my-db-name',
      type: 'mongo',
      clientUrl: 'mongodb://localhost:27017',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
