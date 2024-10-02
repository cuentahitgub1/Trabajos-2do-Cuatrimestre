export class  Camion {
    private marca: string;
    private modelo: string;
    private año: number;
    private color: string;
    private ruedas: string;
    private patente: string;
   
    constructor(marca: string, modelo: string, año: number, color: string, ruedas: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.ruedas = ruedas;
        this.patente = patente;
    }

    //Getter
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
    public getAño(): number {
        return this.año;
    }
    public getColor(): string {
        return this.color;
    }
    public getRuedas(): string {
        return this.ruedas;
    }
    public getPatente(): string {
        return this.patente;
    }

    //Setter
    public setMarca(marca: string): void {
        this.marca = marca;
    }
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
    public setAño(año: number): void {
        this.año = año;
    }
    public setColor(color: string): void {
        this.color = color;
    }
    public setRuedas(ruedas: string): void {
        this.ruedas = ruedas;
    }
    public setPatente(patente: string): void {
        this.patente = patente;
    }
    
    public toString(): string {
        return `Camión: ${this.marca} ${this.modelo} (${this.año}), Color: ${this.color}, Ruedas: ${this.ruedas}, Patente: ${this.patente}`;
    }
}
