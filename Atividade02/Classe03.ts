class Pessoa {
    nome: string; 
    idade: number;
    profissao: string;
    
    constructor(nome: string, idade:number, profissao:string) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    fazer_aniversario():void{
        console.log(this.nome + " fez aniversário");
        this.idade++;
    }
    trabalhar():void {
        console.log(this.nome + " trabalhou");
    }
    estudar():void {
        console.log(this.nome + " estudou");
    }
    

    descrever():string {
        return "nome: " + this.nome + ", idade " + this.idade + ", profissão: " + this.profissao ;
    }
}
