import {CallHandler, ExecutionContext, NestInterceptor, UseInterceptors} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {map, Observable} from "rxjs";


interface ClassConstructor {
    new(...args: any[]): {}
}

export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializeInterceptor(dto))
}

export class SerializeInterceptor implements NestInterceptor {

    constructor(private dto: any) {

    }

    intercept(context: ExecutionContext, handeler: CallHandler<any>): Observable<any> {
        return handeler.handle().pipe(
            map((data) => {
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: false

                })
            })
        )
    }

}