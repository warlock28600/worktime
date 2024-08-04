import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(map((data: any) => {
      const ctx = context.switchToHttp();
      const response = ctx.getResponse();
      const responseCode = response.statusCode;

      return {
        data: data,
        status: responseCode,
      };
    }));
  }

}