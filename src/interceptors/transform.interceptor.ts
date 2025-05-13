import {
  CallHandler,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
// rang tim hieu ve thu vien rxjs - hoi kho hieu. neu hieu dc thi no la cong cu rat manh de build back-end
// streaming data
import { Observable, tap, map, catchError, of } from 'rxjs';
import { StandardResponse } from '../interface/response.interface';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, StandardResponse<T>>
{
  private readonly logger = new Logger(TransformInterceptor.name);

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<StandardResponse<T>> {
    const httpContext = context.switchToHttp();
    const response = httpContext.getResponse<Response>();

    return next.handle().pipe(
      map(
        (data): StandardResponse<T> => ({
          status: response.status,
          message: 'Success',
          data,
        }),
      ),
      // catchError((error) => {
      //   return of({
      //     status: error.status,
      //     message: error.response.message,
      //     error: error.response.error,
      //   });
      // }),
    );
  }
}
