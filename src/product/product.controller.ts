import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateProductDto from './dto/createProduct.dto';
import UpdateProductDto from './dto/updateProduct.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(Number(id));
  }

  @Post()
  async createProduct(@Body() post: CreateProductDto) {
    return this.productService.createProduct(post);
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() post: UpdateProductDto) {
    return this.productService.updateProduct(Number(id), post);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    this.productService.deleteProduct(Number(id));
  }
}
