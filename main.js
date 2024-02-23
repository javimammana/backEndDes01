class ProductManager {

    products = [];

    addProduct(element) {
        const {title, descripton, price, thumbnail, code, stock} = element;
        if (!title || !descripton || !price || !thumbnail || !code || !stock) {
            console.log ("Datos incompletos");
        } else {
            const product = this.products.some(prod => prod.code === element.code);
            if (product) {
                console.log ("Producto existente");
            } else {
                const newProduct = {
                    ...element,
                    id: this.products.length + 1
                }
                this.products.push(newProduct);
                console.log("Producto agregado")
            }
        }
    }

    getProducts() {
        console.log(this.products)
    }

    getProductById(id) {
        const product = this.products.find(prod => prod.id === id);
        if (!product) {
            console.log("Not found")
        } else {
            console.log (product)
        }
    }

}

class Product {
    constructor (title, descripton, price, thumbnail, code, stock) {
        this.title = title;
        this.descripton = descripton;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const listado = new ProductManager();

listado.getProducts();

listado.addProduct(
    new Product ("Producto prueba")
);

listado.addProduct(
    new Product ("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
);

listado.getProducts();

listado.addProduct(
    new Product ("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
);

listado.getProductById(1);