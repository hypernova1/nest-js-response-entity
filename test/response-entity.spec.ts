import { ResponseEntity } from "../src";
import { HttpHeaders } from "../src";

describe('Test', () => {
    it('create', () => {
        const body = { foo: 'bar' };
        const responseEntity = ResponseEntity.ok(body);
        expect(responseEntity).toBeInstanceOf(ResponseEntity);
        expect(responseEntity.statusCode).toEqual(200);
        expect(responseEntity.getBody).toEqual({ foo: 'bar' });
    });

    it ('set status', () => {
        const body = { foo: 'bar' };
        const responseEntity = ResponseEntity.status(200).body(body);

        expect(responseEntity.statusCode).toEqual(200);
        expect(responseEntity.getBody).toEqual(body);
    })

    it ('set headers', () => {
        const responseEntity = ResponseEntity.created();
        const headers = new HttpHeaders();
        const contentLanguage = 'ko';
        const location = 'https://test.com/posts/1';

        headers.add('Content-Language', contentLanguage);
        headers.add('Location', location)
        responseEntity.headers(headers)

        expect(responseEntity.statusCode).toEqual(201);
        expect(responseEntity.getHeaders.getAll['Content-Language']).toEqual(contentLanguage);
        expect(responseEntity.getHeaders.getAll['Location']).toEqual(location);
    });

    it ('set body', () => {
        const location = 'http://test.com/posts/1';
        const body = { foo: 'bar' };
        const responseEntity = ResponseEntity.created(location).body(body);

        expect(responseEntity.getHeaders.getAll['Location']).toEqual(location);
        expect(responseEntity.getBody).toEqual(body);
    })
})