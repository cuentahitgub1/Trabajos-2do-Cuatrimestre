import { Heroe } from "./Heroe";

export class Mago extends Heroe {
        constructor()
            {super("Jakar");}

public presentacion():void
        {return console.log ("Mago", this.nombre, "Salud:"+this.salud, "Nivel:"+this.nivel)}

        public ataque():void
        {return console.log (this.nombre, "lanza hechizo ෴")}

        public defensa():void
        {return console.log (this.nombre, "se protege con magia ⌒")}

        public evolucion():void
        {return console.log (this.nombre, "usa magia para evolucionar ✰")}

        public derrota():void
        {return console.log (this.nombre, "es derrotado ☠")}

        
}