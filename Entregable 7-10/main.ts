import { Auto } from './Auto';
import { Moto } from './Moto';
import { Camion } from './Camion';
import { RegistroAutomotor } from './RegistroAutomotor';

// Crear el registro automotor
const registro = new RegistroAutomotor();

// Crear vehículos
const auto1 = new Auto('Ford', 'Mustang', 1969, 'Negro', '4', 'V3L0Z');
const auto2 = new Auto('Nissan', 'GT-R NISMO', 2020, 'Blanco', '4', 'DR1F7');
const moto1 = new Moto('Kawasaki', 'Ninja 400R', 2011, 'Verde', '2', 'R4Y0');
const camion1 = new Camion('Ford', 'F-MAX', 2018, 'Azul', '16', 'GR4ND3');

// Agregar vehículos al registro
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(auto2);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

// Listar los vehículos en el registro
console.log("Vehículos en el registro:");
registro.listarVehiculos();

// Modificar un vehículo (Reemplazar)
const nuevoAuto = new Auto('Ferrari', 'SP51', 2023, 'Rojo', '4', 'NU3V0');
registro.modificarVehiculo(0, nuevoAuto);

// Listar después de la modificación
console.log("\nDespués de la modificación:");
registro.listarVehiculos();

// Dar de baja un vehículo (Eliminar)
registro.darDeBaja(3);

// Listar después de dar de baja
console.log("\nDespués de dar de baja:");
registro.listarVehiculos();

