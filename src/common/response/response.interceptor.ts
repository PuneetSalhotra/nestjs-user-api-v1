// src/common/response.interceptor.ts
import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        return {
          status: 'success',
          message: 'Request was successful',
          data,
        };
      }),
      catchError(error => {
        if (error instanceof NotFoundException) {
          // Handle NotFoundException specifically
          return throwError({
            status: 'error',
            message: error.message,
            data: null,
          });
        }

        // Handle other errors
        return throwError({
          status: 'error',
          message: 'Internal Server Error',
          data: null,
        });
      }),
    );
  }
}
