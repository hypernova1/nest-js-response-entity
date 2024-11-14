# NestJS Response Entity
The ResponseEntity package provides a Spring-like ResponseEntity class and an associated interceptor for handling HTTP responses in a standardized, flexible way within a NestJS application.

## Usage
1. Install the Package
```
$ npm install nestjs-response-entity
```
2. Setup the interceptor in Your AppModule
~~~typescript
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseEntityInterceptor } from 'nestjs-response-entity';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseEntityInterceptor,
    },
  ],
})
export class AppModule {}
~~~

3. Using ResponseEntity in a Controller

~~~typescript
import { ResponseEntity, HttpHeaders } from 'nestjs-response-entity';

@Controller()
export class ExampleController {
    @Get()
    getExample() {
        return ResponseEntity.ok({ message: 'Success!' });
    }

    // add headers
    @Post()
    getExample() {
        const responseEntity = ResponseEntity.created('http://localhost:3000');
        const headers = new HttpHeaders();
        header.add('Accept', 'application/json');
        responseEntity.headers(headers);
        return responseEntity;
    }
}
~~~