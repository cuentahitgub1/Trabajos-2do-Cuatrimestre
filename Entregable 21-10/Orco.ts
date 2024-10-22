import { Heroe } from "./Heroe";

export class Orco extends Heroe {
        constructor()
            {super("Darmut");}

public presentacion():void
        {return console.log ("Orco", this.nombre, "Salud:"+this.salud, "Nivel:"+this.nivel)}
        
        public ataque():void
        {return console.log (this.nombre, "ataca con su arma ᔨ")}
        
        public defensa():void
        {return console.log (this.nombre, "se cubre con escudo ⨷")}

        public evolucion():void
        {return console.log (this.nombre, "toma bebida para evolucionar ࿄")}

        public derrota():void
        {return console.log (this.nombre, "es derrotado ☠")}

}