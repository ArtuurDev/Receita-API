export class Entity<Props> {
    private _props: Props

    constructor(props: Props) {
        this._props = props
    }

    get props() {
        return this._props
    }

}