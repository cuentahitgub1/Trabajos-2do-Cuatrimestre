
import { Orco } from "./Orco";
import { SuperOrco } from "./OrcoS";
import { Elfo } from "./Elfo";
import { SuperElfo } from "./ElfoS";
import { Mago } from "./Mago";
import { SuperMago } from "./MagoS";

let orco=new Orco();
let orcoS=new SuperOrco();
let elfo=new Elfo();
let elfoS=new SuperElfo();
let mago=new Mago();
let magoS=new SuperMago();


orco.presentacion();
elfo.presentacion();
mago.presentacion();
console.log("");

orco.ataque();
elfo.defensa();
elfo.ataque();
orco.defensa();
orco.ataque();
elfo.derrota();
console.log("");

mago.evolucion();
mago=new SuperMago();
magoS.presentacion();
console.log("");

magoS.ataque();
console.log("");

orco.derrota();
console.log("");

console.log("Fin del Juego ☻");
