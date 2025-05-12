import { NestInterceptor } from '@nestjs/common';

import { CallHandler } from '@nestjs/common';

import { Injectable } from '@nestjs/common';

import { ExecutionContext } from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const time = Date.now();
    console.log('Before: ', time);

    const now = Date.now() - time;
    return next.handle().pipe(tap(() => console.log(`After... ${now}ms`)));
  }
}
