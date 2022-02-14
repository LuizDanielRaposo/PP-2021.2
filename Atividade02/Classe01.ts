class Pet {
    nome: string; 
    idade: number;
    especie: string;
    
    constructor(nome: string, idade:number, especie:string) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    comer():void{
        console.log (this.nome + " está alimentado!");
    }
    banho():void{
        console.log (this.nome + " tomou banho!");
    }
    passear():void{
        console.log (this.nome + " foi passear!");
    }
    

    descrever():string {
        return "Especie: " + this.especie + ", nome: " + this.nome + ", idade " + this.idade;
    }
}
