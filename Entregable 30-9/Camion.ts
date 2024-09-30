export class Camion {
    constructor(
        public marca: string,
        public modelo: string,
        public año: number,
        public color: string,
        public ruedas: string,
        public patente: string,
    ) {}

    public toString(): string {
        return `Camíon: ${this.marca} ${this.modelo} (${this.año}), Color: ${this.color}, Ruedas: ${this.ruedas}, Patente: ${this.patente}`;
    }
}
