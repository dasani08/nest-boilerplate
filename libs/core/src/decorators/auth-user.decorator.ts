import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwtDecode from 'jwt-decode';
import { plainToClass } from 'class-transformer';

import { AuthUserDto } from '../common/dto/AuthUserDto';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = jwtDecode(request.headers['authorization']);
    return plainToClass(AuthUserDto, user, { strategy: 'excludeAll' });
  },
);
