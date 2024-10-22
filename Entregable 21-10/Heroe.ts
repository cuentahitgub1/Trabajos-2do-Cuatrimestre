export class Heroe{
    protected nombre:string; 
    protected salud:number=100; 
    protected nivel:number=1;

    constructor (nombre:string) 
        {this.nombre=nombre;}

    public presentacion():void
    {return console.log ("personaje");}

}
