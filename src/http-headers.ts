export type HeaderType = 'Content-Type' | 'Content-Language' | 'Content-Encoding' | 'Content-Length' | 'Content-Location' | 'Content-Disposition' | 'Content-Security-Policy' | 'Accept' | string;

export class HttpHeaders {
    private _value: Record<HeaderType, string> = {};

    add(key: HeaderType, value: string) {
        this._value[key] = value;
    }

    addAll(headers: Record<HeaderType, string>) {
        this._value = { ...this._value, ...headers };
    }

    get getAll(): Record<HeaderType, string> {
        return this._value;
    }
}