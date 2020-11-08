import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';

import '@app/core/boilerplate.polyfill';
import { CoreModule, ConfigService, HttpExceptionFilter } from '@app/core';
import { SERVICE_NAME, PORT } from './constants';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    { cors: true },
  );

  app.use(
    morgan(
      ':method :url :status :res[content-length] - :response-time ms - :user-agent',
    ),
  );

  const reflector = app.get(Reflector);

  app.useGlobalFilters(new HttpExceptionFilter(reflector));

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      disableErrorMessages: false,
      validationError: {
        target: false,
      },
    }),
  );

  const configService = app.select(CoreModule).get(ConfigService);

  if (['development', 'staging'].includes(configService.nodeEnv)) {
    setupSwagger(app);
    app.set('logger', ['debug']);
  }

  const port = configService.getNumber('PORT') || PORT;
  await app.listen(port);
  console.info(`${SERVICE_NAME} is running on port ${port}`);
}
bootstrap();
