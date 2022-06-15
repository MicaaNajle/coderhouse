/*Crear un proyecto en node.js que genere 10000 números aleatorios en el rango  de 1 a 20.
B- Crear un objeto cuyas claves sean los números salidos y el valor asociado 
a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.*/

let generador = (min, max) => {
    const numero = Math.floor (Math.random() * (max-min) + min) 
    console.log("El numero es:", numero)
    
}
generarNumero(1,20)

/*Desarrollar un proyecto en node.js que declare un array de objetos de este tipo:*/
const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

/* Y debo obtener los nombres de los productos, precio total,
precio promedio, producto con menor y mayor precio, */

const nombreProducto = [];
let precioTotal = 0;
let precioMenor = 0;
let precioMayor = 0;

productos.map(item => {
    nombreProductos.push(item.nombre);
    precioTotal += item.precio; // += le decimos que le vamos a sumar lo que declaramos
    if(item.precio < precioMenor) precioMenor = item.precio;
    if(item.precio > precioMayor) precioMayor = item.precio;
})

const objetoMostrar = {
    nombreProductos: nombreProdcutos.join(', '),
    precioTotal,
    precioMenor,
    precioMayor,
    precioPromedio: precioTotal / 6
};

console.log(objetoMostrar);

// Calculadora de edad
// npm i moment en la consola para instalar esa dependencia

const moment = require('moment')
moment.locale('es')

console.log(moment(19970220, "YYYYMMDD").fromNow()) //hace cuanto tiempo naci
console.log(`
    Hoy es ${moment().formar('DD/MM/YYYY')}
    Nací el ${moment('1997-02-20')}
    Desde mi nacimiento han pasado ${moment().diff("1997-02-20"), 'years'} años
    Desde mi nacimiento han pasado ${moment().diff("1997-02-20"), 'days'} días
`)