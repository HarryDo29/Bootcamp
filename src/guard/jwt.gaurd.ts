import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtGaurd implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No token provided 1');
    }
    const token: string[] = authHeader.split(' ');
    console.log(token[0]);
    console.log(token[1]);

    if (token[0] !== 'Bearer') {
      throw new UnauthorizedException('No token provided 2');
    }
    // verify token
    try {
      const payload = jwt.verify(token[1], 'SECRET_PASSWORD');
      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
