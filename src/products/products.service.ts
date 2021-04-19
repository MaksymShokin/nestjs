import { Product } from './product.model';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = Math.random().toString();
    const newProduct = new Product(prodId, title, description, price);

    this.products.push(newProduct);

    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getProductById(id: string) {
    return this.findProduct(id);
  }

  updateProduct(id: string, title: string, description: string, price: number) {
    const product = this.findProduct(id);
    const productIndex = this.products.findIndex(
      (product) => product.id === id,
    );
    const updatedProduct = { ...product };

    updatedProduct.title = title ? title : updatedProduct.title;
    updatedProduct.description = description
      ? description
      : updatedProduct.description;
    updatedProduct.price = price ? price : updatedProduct.price;

    this.products[productIndex] = updatedProduct;

    return { ...updatedProduct };
  }

  private findProduct(id: string) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return { ...product };
  }
}
