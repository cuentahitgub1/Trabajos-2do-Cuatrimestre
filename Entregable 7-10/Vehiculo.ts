export class Vehiculo {
    constructor(
        protected marca: string,
        protected modelo: string,
        protected año: number,
        protected color: string,
        protected ruedas: string,
        protected patente: string
    ) {}

    public toString(): string {
        return `${this.marca} ${this.modelo} (${this.año}), Color: ${this.color}, Ruedas: ${this.ruedas}, Patente: ${this.patente}`;
    }
}
