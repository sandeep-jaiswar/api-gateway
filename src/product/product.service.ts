import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateProductDto from './dto/createProduct.dto';
import UpdateProductDto from './dto/updateProduct.dto';
import Product from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async getAllProducts() {
    return await this.productsRepository.find();
  }

  async getProductById(id: number) {
    const product = await this.productsRepository.findOneBy({ id });
    if (product) {
      return product;
    }
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  }

  async createProduct(product: CreateProductDto) {
    const newProduct = await this.productsRepository.create(product);
    await this.productsRepository.save(newProduct);
    return newProduct;
  }

  async updateProduct(id: number, post: UpdateProductDto) {
    await this.productsRepository.update(id, post);
    const updatedProduct = await this.productsRepository.findOneBy({ id });
    if (updatedProduct) {
      return updatedProduct;
    }
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  }

  async deleteProduct(id: number) {
    const deleteResponse = await this.productsRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }
  }
}
