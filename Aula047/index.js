class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`dispositivo já ligado`)
            return;
        }
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(`dispositivo já desligado`)
            return;
        }
        this.ligado = false
    }
}

const tv = new DispositivoEletronico('tv')
tv.ligar()
tv.ligar()
console.log(tv)

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
};

const s1 = new Smartphone('Samsung', 'Prata', 'Galaxy s30');
s1.ligar()
console.log(s1)