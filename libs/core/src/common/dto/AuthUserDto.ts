import { Expose } from 'class-transformer';

export class AuthUserDto {
  @Expose()
  userId: string;
}
