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
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return { ...product };
  }
}
