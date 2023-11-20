import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Get()
  async findAll(
    @Query('page', new ParseIntPipe()) page: number = 1,
    @Query('size', new ParseIntPipe()) size: number = 8) {
    return await this.productService.findAll(page, size);
  }

  @Get('filter')
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiQuery({
    name: 'size',
    required: false,
    type: Number,
    description: 'Number of items per page',
  })
  @ApiQuery({
    name: 'brandId',
    required: false,
    type: Number,
    description: 'Filter by brand ID',
  })
  @ApiQuery({
    name: 'categoryId',
    required: false,
    type: Number,
    description: 'Filter by category ID',
  })
  @ApiQuery({
    name: 'productName',
    required: false,
    type: String,
    description: 'Filter by product name',
  })
  @ApiQuery({
    name: 'colorId',
    required: false,
    type: Number,
    description: 'Filter by color',
  })

  findByFilter(
    @Query('page', new ParseIntPipe()) page?: number,
    @Query('size', new ParseIntPipe()) size?: number,
    @Query('brandId', new ParseIntPipe()) brandId?: number,
    @Query('categoryId', new ParseIntPipe()) categoryId?: number,
    @Query('productName') productName?: string,
    @Query('colorId', new ParseIntPipe()) colorId?: number,
  ) {
    return this.productService.findByFilter(
      page,
      size,
      brandId,
      categoryId,
      productName,
      colorId,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.productService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
