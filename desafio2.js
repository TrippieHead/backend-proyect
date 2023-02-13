const fs = require('fs');

class ProductManager {
    constructor(path) {
      this.products = [];
      this.id = 0;
      this.path = path;
    }
  
    addProduct(product) {
      this.id++;
      product.id = this.id;
      this.products.push(product);
      fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
  
    getProducts() {
      return JSON.parse(fs.readFileSync(this.path));
    }
  
    getProductById(id) {
      const products = this.getProducts();
      return products.find(p => p.id === id);
    }
  
    updateProduct(id, updatedProduct) {
      const products = this.getProducts();
      const productIndex = products.findIndex(p => p.id === id);
      if (productIndex === -1) {
        throw new Error('Product not found');
      }
      products[productIndex] = { ...products[productIndex], ...updatedProduct };
      fs.writeFileSync(this.path, JSON.stringify(products));
    }
  
    deleteProduct(id) {
      const products = this.getProducts();
      const productIndex = products.findIndex(p => p.id === id);
      if (productIndex === -1) {
        throw new Error('Product not found');
      }
      products.splice(productIndex, 1);
      fs.writeFileSync(this.path, JSON.stringify(products));
    }
}