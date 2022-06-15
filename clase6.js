// 1er ejercicio

const http = require('http');
const puerto1 = 8080;

const server1 = http.createServer((req, res) => {
    res.end('Bienvenido a mi servidor')
})

server1.listen(puerto1, () => {
    console.log('Servidor escuchando puerto ${puerto}')
})

/* Se inicializa con npm start para que nodemon se quede escuchando nuestros cambios - Lo vemos entrando a localhost: 8080 */

// 2do ejercicio
// Preparamos todo para crear el servidor web
// Nos traemos la hora con Date() y despues creamos una serie de if's

const http = require('http');
const puerto = 8080

const server = http.createServer((req, res) => {
    const hora = new Date().getHours
    if(hora >= 6 && hora <= 12){
        res.end('Buenos días!')
    } else if(hora >= 13 && hora <= 19){
        res.end('Buenas tardes!')
    } else if(hora >= 20 || hora <= 5){
        res.end('Buenas noches!')
    }
})

server.listen(puerto, () => {
    console.log(`Servidor escuchando puerto: ${puerto}`)
})

// explicaciones, ejemplos

const express = require('express')
const app = express()
const puerto3 = 8080

app.get('/', (req, res) => {
	res.status(200).send('Hola soy ruta home')
})

app.get('/publicaciones', (req, res) => {
	res.send('Hola soy ruta publicaciones')
})

app.get('/user', (req, res) => {
    const {nombre, apellido, edad} = req.query
    console.log(req.query)
    res.send(`Hola ${nombre} ${apellido} ${edad} bienvenido!`)
})
    
app.listen(puerto3, () => {
	console.log(`Servidor escuchando puerto: ${puerto3}`)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))

// Ejercicio 3

const express = require('express');
const app4 = express();
let visitas = 0;
const puerto4 = 8080;

app4.get('/', (req, res) => {
    res.send(<h1 style="color:blue">Bienvenidos al servidor express</h1>)
})

app.use((req, res, next) => { //middleware: pasa antes por aca que por las rutas
    visitas++
    next()
})

app4.get('/visitas', (req, res) => {
    visitas++
    res.send(`La cantidad de visitas es ${visitas}`)
})

app4.get('/fyh', (req, res) => {
    const data = new Date()
    res.send({Fecha: data.getDate(), Hora: data.getHours()})
})

app4.listen(puerto4, () => {
	console.log(`Servidor escuchando puerto: ${puerto4}`)
})