import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.stategy';

@Module({
  providers: [PassportModule, JwtStrategy],
  exports: [JwtStrategy],
})
export class PassportModule {}
