class Carro {
    tipo: String;
    cor: String;
    placa: String;
    motor: Number;   

    constructor(tipo: String, cor: String, placa: String, motor:Number){
        this.tipo = tipo;
        this.cor = cor;
        this.placa = placa;
        this.motor = motor;
    }

    ligar():void {
        console.log("Carro ligado.");
    }

    desligar():void {
        console.log("Carro desligado.");
    }

    andar():void{
        console.log("Carro andou.");
    }

    freiar():void{
        console.log("Carro freiou");
    }

    descrever():string {
        return this.tipo + " - " + this.cor + " - "
        + this.placa + " - " + this.motor ;
    }
}
