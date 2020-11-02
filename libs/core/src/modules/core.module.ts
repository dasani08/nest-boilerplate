import { Global, HttpModule, Module } from '@nestjs/common';

import { ConfigService } from '../services/config.service';
import { HttpLogger } from '../loggers/http';

@Global()
@Module({
  providers: [ConfigService, HttpLogger],
  exports: [HttpModule, ConfigService, HttpLogger],
  imports: [HttpModule],
})
export class CoreModule {}
