const fs = require ("fs")

class Contenedor {
    static id = 0;
    file = "./productos.txt";

    constructor() {
        Contenedor.id++;
    }

    async save(object){
        try {
            object.id = Contenedor.id;
            const stringObject = JSON.stringify(object);
            //const productosString = `[${await fs.promises.readFile(this.file, "utf-8")}]`;
            //const products = JSON.parse(productosString);
            let dataFile = '';
            if (object.id === 1) {
                dataFile = stringObject;
            } else {
                dataFile = `,${stringObject}`;
            }
            await fs.promises.appendFile(this.file, dataFile);
            console.log("Se guardó con éxito");
            return object.id;
        } catch (error) {
            console.log(`Hubo un error ${error}`)
            return -1;
        }
    }

    async getById(id){
        try {
            const productos = `[${await fs.promises.readFile(this.file, "utf-8")}]`;
            const objectsProducto = JSON.parse(productos);
            return objectsProducto.find(producto => producto.id === id) || null;
        } catch (error) {
            console.log(`Hubo un error ${error}`);
            return null;
        }
    }


    async getAll() {
        try {
            const productos = `[${await fs.promises.readFile(this.file, "utf-8")}]`;
            return JSON.parse(productos);
        } catch (error) {
            console.log(`Hubo un error ${error}`);
            return [];
        }
    }

    async deleteById(id){
        try {
            const productos = `[${await fs.promises.readFile(this.file, "utf-8")}]`;
            const objectsProducto = JSON.parse(productos);
            const newProductList = objectsProducto.filter(product => product.id !== id);
            console.log(`Nuevo archivo sin elemento ${id}`)
            console.log(newProductList);
            // guardar en archivo
        } catch (error) {
            console.log(`Hubo un error ${error}`);
        }
    }

    async deleteAll(){
        try {
            await fs.promises.unlink(this.file, "utf-8");
            console.log("Se ha borrado con exito")
        } catch (error) {
            console.log("Fallo al borrar")
        }
    }
}

async function readFile() {
    const contenedor = new Contenedor;
    const producto = {
        title: 'Producto 01',
        price: 2.5,
        thumbnail: 'www.imagen.com/producto01'
    }
    return contenedor.save(producto);
}

async function main() {
    console.log('Guardar Objetos');
    console.log(await readFile());
    console.log(await readFile());

    console.log('Leer Objeto por Id: 2');
    const contenedor = new Contenedor;
    const productById = await contenedor.getById(2);
    console.log(productById);

    console.log('Leer Todos los Objetos');
    console.log(await contenedor.getAll());

    contenedor.deleteById(2);

    contenedor.deleteAll();
}

main();