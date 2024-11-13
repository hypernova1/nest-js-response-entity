import { ResponseEntity } from "../src";
import { HttpHeaders } from "../src/http-headers";

describe('Test', () => {
    it('create', () => {
        const responseEntity = ResponseEntity.ok({ foo: 'bar' });
        expect(responseEntity).toBeInstanceOf(ResponseEntity);
        expect(responseEntity.body).toEqual({ foo: 'bar' })
    })

    it ('set headers', () => {
        const responseEntity = ResponseEntity.created();
        const headers = new HttpHeaders();
        const contentLanguage = 'ko';
        const location = 'https://test.com/posts/1';
        headers.add('Content-Language', contentLanguage);
        headers.add('Location', location)
        responseEntity.headers(headers)

        expect(responseEntity.getHeaders.getAll['Content-Language']).toEqual(contentLanguage);
        expect(responseEntity.getHeaders.getAll['Location']).toEqual(location);
    })
})