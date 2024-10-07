import { Vehiculo } from './Vehiculo';

export class Auto extends Vehiculo {
    public toString(): string {
        return `Auto: ${super.toString()}`;
    }
}
