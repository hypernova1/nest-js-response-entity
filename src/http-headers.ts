export default class HttpHeaders {
    private _value: Record<string, string> = {};

    add(key: string, value: string) {
        this._value[key] = value;
    }

    addAll(headers: Record<string, string>) {
        this._value = { ...this._value, ...headers }
    }

    get getAll(): Record<string, string> {
        return this._value;
    }
}