import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICES } from './constants';

@Controller()
export class AppController {
  constructor(@Inject(SERVICES.USER) private client: ClientProxy) {}

  @Get('hello')
  async getHello() {
    const pattern = { cmd: 'getHello' };
    return await this.client.send(pattern, {});
  }
}
