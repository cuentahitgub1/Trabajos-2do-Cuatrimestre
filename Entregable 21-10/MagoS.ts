import { Mago } from "./Mago";

export class SuperMago extends Mago {
    constructor()
        {super(); this.salud=120; this.nivel=2;}

public presentacion():void
    {return console.log ("SuperMago", this.nombre, "Salud:"+this.salud, "Nivel:"+this.nivel)}
        
        public ataque():void
        {return console.log (this.nombre, "ataca con brujería ✸")}

        public defensa():void
        {return console.log (this.nombre, "crea escudo para defenderse ◯")}

        public derrota():void
        {return console.log (this.nombre, "es derrotado ☠")}
}