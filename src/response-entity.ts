import { HttpHeaders } from "./http-headers";

export class ResponseEntity<T> {

    private readonly _statusCode: number;
    private readonly _headers: HttpHeaders = new HttpHeaders();
    private _body?: T;

    constructor(statusCode: number, data?: T, headers?: Record<string, string>) {
        this._statusCode = statusCode;
        this._body = data;
        if (headers) {
            this._headers.addAll(headers);
        }
    }

    get statusCode(): number {
        return this._statusCode;
    }

    get getBody(): T | undefined {
        return this._body;
    }

    static status(status: number) {
        return new ResponseEntity(status);
    }

    static ok<T>(data?: T) {
        return new ResponseEntity(200, data);
    }

    static created(location?: string) {
        const responseEntity = new ResponseEntity(201);
        if (location) {
            const headers = new HttpHeaders();
            headers.add('Location', location);
            responseEntity.headers(headers);
        }
        return responseEntity;
    }

    static noContent() {
        return new ResponseEntity(204);
    }

    headers(headers: HttpHeaders): ResponseEntity<T> {
        this._headers.addAll(headers.getAll);
        return this;
    }

    body(body: T) {
        this._body = body;
        return this;
    }

    get getHeaders() {
        return this._headers;
    }

}