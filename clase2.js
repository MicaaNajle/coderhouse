// Clase 2 - 18/5
// 1º ejercicio

let names = ["Monique", "Amelie", "Charlotte"];
let noNames = [];

function mostrarLista(lista) {
    if (lista.length == 0) {
        console.log("Lista vacía") 
    } else {
        console.log(lista)
    };
};

mostrarLista(noNames);

// 2º ejercicio

let numbers = [1, 2, 3];
let noNumbers = [];

let showNumbers = function(lista){
    if (lista.length == 0) {
        console.log("Lista vacía") 
    } else {
        console.log(lista)
    };
}

showNumbers(numbers);

// 3º ejercicio

function crearMultiplicador(multiplicador, num){
    let multiplicar = function() {multiplicador * num};
    return multiplicar();
};

function duplicar(num){
    return crearMultiplicador(2, num);
};

function triplicar(num){
    return crearMultiplicador(3, num);
};

console.log(duplicar(2));
console.log(triplicar(2));

// 4º ejercicio

class Contador {
    constructor(nombreResponsable, contador){
        this.nombreResponsable = nombreResponsable;
        this.contador = contador
    }

    static valor = 0

    obtenerResponsable(){
        return this.nombreResponsable
    };

    obtenerCuentaIndividual(){
        return this.contador
    };

    obtenerCuentaGlobal(){
        return Contador.valor;
    };

    contar(){
        this.contador++
        Contador.valor++
    };
}

// Desafío entregable

class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido 
        this.libros = []
        this.mascotas = []
    }
    getFullName(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        if(this.mascotas.length == 0){
            return "No tengo mascotas"
        } else {return this.mascotas.length}
    }
    addBook(libro){
        this.libros.push(libro)
    }
    getBookNames(){
        return this.libros
    }
}

const micaela = new Usuario ("Micaela", "Najle");
micaela.addMascota("Aston");
micaela.addMascota("Teo");
micaela.addMascota("Lola");
micaela.addMascota("Hannah");
micaela.addBook([{titulo: "Las Doncellas", autor: "Alex Michalides"}, 
                {titulo: "Orgullo y prejuicio", autor: "Jane Austen"}]);
console.log(micaela.getFullName());
console.log(micaela.countMascotas());
console.log(micaela.getBookNames());