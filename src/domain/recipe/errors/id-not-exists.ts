export class IdNotExists {
    private _code: number
    private _message: string

    constructor(message?: string, code?: number) {
        this._message = message ?? 'Esse id não existe',
        this._code = code ?? 404
    }

    get code() {
        return this._code
    }

    get message() {
        return this._message
    }
    

    toJson() {
        return {
            ClassError: IdNotExists.name,
            message: this.message,
            code: this._code
        }
    }
}