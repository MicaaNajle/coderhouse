// Desafío

const fs = require ("fs")

class Contenedor {
    constructor (titulo, precio, thumbnail, id) {
        this.titulo = titulo
        this.precio = precio
        this.thumbnail = thumbnail
    }

    static id = 0   

    save(object){
        fs.appendFile("./productos.txt", object, error => {
            if (error) {
                console.log(`Hubo un error ${error}`)
            } else {
                console.log("Archivo escrito con éxito!")
            }
        })
    }

    /*save(object){
        fs.appendFile("./productos.txt", () => {
            this.Contenedor++
            this.id++
        }),
        error => {
            if (error) {
                console.log(`Hubo un error ${error}`)
            } else {
                console.log("Archivo escrito con éxito!")
            }
        }
    }*/
    
    getById(number) {
        const objets = fs.readFile("./productos.txt", "utf-8")
        return 
    }

    getAll(){}
    deleteById(Number){}
    deleteAll(){}
}