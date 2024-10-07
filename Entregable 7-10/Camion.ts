import { Vehiculo } from './Vehiculo';

export class Camion extends Vehiculo {
    public toString(): string {
        return `Camión: ${super.toString()}`;
    }
}
