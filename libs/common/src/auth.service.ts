import { Injectable } from '@nestjs/common';
import { AuthUserDto, ContextService } from '@app/core';

@Injectable()
export class AuthService {
  private static _authUserKey = 'user_key';

  static setAuthUser(user: AuthUserDto): void {
    ContextService.set(AuthService._authUserKey, user);
  }

  static getAuthUser(): AuthUserDto {
    return ContextService.get(AuthService._authUserKey);
  }
}
