const fs = require("fs");

class ProductManager {
  constructor(path) {		
    this.path = path;
  }
  async addProducto(producto) {	

    if (
      !producto.title ||			
      !producto.description||
      !producto.price ||
      !producto.code
    ) {
      return console.error("producto incompleto");
    }

    const productos = await this.getProductos();
    let idProducto = productos.length;
        const nuevoProducto = {
        ...producto,
        id : idProducto++
       }

    productos.push(nuevoProducto);			
    await fs.promises.writeFile(this.path, JSON.stringify(productos, null,2), 'utf8');  
}

async getProductos(){
        try {
          const result = await fs.promises.readFile(this.path, "utf-8");
          const productos = JSON.parse(result);
          return productos;
        } catch (error) {		
          return [];	
        }
      }

async getProductosById(id_producto){
    try {
        const productos = await this.getProductos()
        let producto = productos.find (producto => producto.id === id_producto)
        return producto;
      } catch (error) {		return console.log ("Producto no encontrado")	
      }
}

async updateProducto(id_producto,nProducto){
    try {
        const productos = await this.getProductos()
        let producto = productos.find (producto => producto.id === id_producto)
        let productoModificado = {...producto, ...nProducto};
        

	    productos[index] = productoModificado;			
        await fs.promises.writeFile(this.path, JSON.stringify(productos, null,2), 'utf8');
      } catch (error) {		console.log("No se pudo modificar el producto")
      }
    
}

async deleteProducto(id_producto){
    try {
        const productos = await this.getProductos()
        let indexProductoAEliminar = productos.findIndex (producto => producto.id === id_producto)
        productos.splice(indexProductoAEliminar, 1)

        await fs.promises.writeFile(this.path, JSON.stringify(productos, null,2), 'utf8');
      } catch (error) {	console.log ("No se pudo eliminar el producto")
      }
}

}


const test = async () => {
  const productManager = new ProductManager('./productos.json');		
  await productManager.addProducto({					
      title: 'Auto',
      description :"clio 2009",
      price : 400,
      thumbnail: "imagen",
      stock: 2,
      code : 456,
  });

  await productManager.addProducto({					
    title: 'Ausafddsfsto',
    description :"asdfasdfasd 2009",
    price : 4500,
    thumbnail: "imaasdfasdfsgen",
    stock: 22,
    code : 4456,
});

await productManager.addProducto({					
  title: 'hhghhhto',
  description :"dfhhd 2009",
  price : 45500,
  thumbnail: "imahn",
  stock: 212,
  code : 41456,
});
  const productos = await productManager.getProductos();			
  console.log(productos);


  const getProductosID = await productManager.getProductosById(5) 
  console.log(getProductosID);

  const modificarProd = await productManager.updateProducto(1, { 
    title : "camioneta",
    price : 5000,
    stock : 3,
    code : 40 
  })
  console.log (modificarProd);

  const productoAEliminado = await productManager.deleteProducto(0)
  console.log(productoAEliminado);

  const nuevaLista = await productManager.getProductos();
  console.log(nuevaLista)
}

test ();