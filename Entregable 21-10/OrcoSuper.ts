import { Orco } from "./Orco";

export class SuperOrco extends Orco {
        constructor()
            {super();}

public presentacion():void
        {return console.log ("SuperOrco", this.nombre, "Salud:"+this.salud, "Nivel:"+this.nivel)}
        
        public ataque():void
        {return console.log (this.nombre, "ataca con su arma encantada ᖨ")}
        
        public defensa():void
        {return console.log (this.nombre, "desvia el ataque con sus manos ✊")}

        public derrota():void
        {return console.log (this.nombre, "es derrotado ☠")}

}
