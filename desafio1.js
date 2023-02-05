class ProductManager {
    constructor() {
      this.products = [];
      this.id = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error('All fields are required.');
        return;
      }
  
      const product = this.products.find(p => p.code === code);
      if (product) {
        console.error('Product code already exists.');
        return;
      }
  
      this.products.push({
        id: ++this.id,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  
    getProducts() {
      return console.log(this.products);
    }
  
    getProductById(id) {
      const productFound = this.products.find(p => p.id === id);
      if (!productFound) {
        throw new Error('Product not found!');
      }
      return console.log(productFound);
    }
  }

const producto1 = new ProductManager()
producto1.addProduct('monitor', 'pantalla 4k HD 20 pulgadas', 15500, 'url', 1, 100)
producto1.getProducts()