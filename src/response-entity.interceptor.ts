import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map } from "rxjs";
import ResponseEntity from "./response-entity";

export default class ResponseEntityInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>) {
        const response = context.switchToHttp().getResponse();

        return next.handle().pipe(
            map((data) => {
                if (data instanceof ResponseEntity) {
                    const headers = data.getHeaders.getAll;
                    const headerKeys = Object.keys(headers);
                    for (const headerKey of headerKeys) {
                        const headerValue = headers[headerKey];
                        response.setHeaders.set(headerKey, headerValue);
                    }
                    response.statusCode = data.statusCode;
                    return data.body;
                }

                return data;
            })
        )
    }

}