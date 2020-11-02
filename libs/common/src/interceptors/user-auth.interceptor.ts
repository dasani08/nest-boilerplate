import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { plainToClass } from 'class-transformer';
import { AuthUserDto } from '@app/core';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const user = jwtDecode(request.headers['authorization']);
    AuthService.setAuthUser(
      plainToClass(AuthUserDto, user, { strategy: 'excludeAll' }),
    );
    return next.handle();
  }
}
