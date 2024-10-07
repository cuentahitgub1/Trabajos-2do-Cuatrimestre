import { Vehiculo } from './Vehiculo';

export class Moto extends Vehiculo {
    public toString(): string {
        return `Moto: ${super.toString()}`;
    }
}
