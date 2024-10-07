import { Vehiculo } from './Vehiculo';

export class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    public modificarVehiculo(index: number, nuevoVehiculo: Vehiculo): void {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos[index] = nuevoVehiculo;
        } else {
            console.log("Índice fuera de rango.");
        }
    }

    public darDeBaja(index: number): void {
        if (index >= 0 && index < this.vehiculos.length) {
            this.vehiculos.splice(index, 1);
        } else {
            console.log("Índice fuera de rango.");
        }
    }

    public listarVehiculos(): void {
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`${index}: ${vehiculo.toString()}`);
        });
    }
}
