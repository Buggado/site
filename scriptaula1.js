class Carro{
    constructor(marca){
        this.marca = marca; //propriedade da classe
    }
    mostrarMarca(){
        console.log('A marca do carro é '+this.marca);
    }
}

const meuCarro = new Carro("Ford");

meuCarro.mostrarMarca();

let array1 = [1,2,3,4,5];
console.log(array1.sort());
console.log(array1.length);