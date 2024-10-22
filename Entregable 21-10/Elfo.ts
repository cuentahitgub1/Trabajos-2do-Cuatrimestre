import { Heroe } from "./Heroe";

export class Elfo extends Heroe {
        constructor()
            {super("Fergus");}

public presentacion():void
        {return console.log ("Elfo", this.nombre, "Salud:"+this.salud, "Nivel:"+this.nivel)}

        public ataque():void
        {return console.log (this.nombre, "lanza una flecha ➼")}

        public defensa():void
        {return console.log (this.nombre, "salta para evitar ataque ☇")}
        
        public evolucion():void
        {return console.log (this.nombre, "usa amuleto para evolucionar ❂")}

        public derrota():void
        {return console.log (this.nombre, "es derrotado ☠")}

       
}