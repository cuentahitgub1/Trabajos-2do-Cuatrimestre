import { Elfo } from "./Elfo";

export class SuperElfo extends Elfo {
        constructor()
            {super();}

public presentacion():void
        {return console.log ("SuperElfo", this.nombre, "Salud:"+this.salud, "Nivel:"+this.nivel)}

        public ataque():void
        {return console.log (this.nombre, "lanza flecha de fuego ➺")}

        public defensa():void
        {return console.log (this.nombre, "esquiva el ataque ☈")}

        public derrota():void
        {return console.log (this.nombre, "es derrotado ☠")}
}