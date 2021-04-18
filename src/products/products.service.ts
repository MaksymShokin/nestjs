import { Product } from './product.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, description: string, price: number) {
    const prodId = new Date().toString();
    const newProduct = new Product(
      new Date().toString(),
      title,
      description,
      price,
    );

    this.products.push(newProduct);

    return prodId;
  }

  getProducts() {
    return [...this.products];
  }
}
