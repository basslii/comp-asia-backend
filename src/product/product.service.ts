import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) { }
  
  async create(createProductDto: CreateProductDto) {
    const test = await this.productRepository.save(createProductDto);
    return await this.productRepository.save(createProductDto);
  }

  async findAll(page: number, size: number) {
    const skip = (page - 1) * size;
    const [products, total] = await this.productRepository.findAndCount({
      relations: ['brand', 'category', 'color'],
      skip: skip,
      take: size,
    });

    return {
      data: Array.isArray(products) ? products : [],
      total: total,
      page: page,
      lastPage: Math.ceil(total / size),
    };
  }

  async findOne(id: number) {
    return await this.productRepository.findOne({ where: { id } })
  }

  async findByFilter(
    page: number = 1,
    size: number = 8,
    brandId?: number,
    categoryId?: number,
    productName?: string,
    colorId?: number
  ) {
    
    try {
      const skip = (page - 1) * size;
      const whereCondition = {};

      if (!Number.isNaN(brandId)) whereCondition['brand'] = { id: brandId };
      if (!Number.isNaN(categoryId)) whereCondition['category'] = { id: categoryId };
      if (productName !== null) whereCondition['name'] = ILike(`${productName}`);
      if (!Number.isNaN(colorId)) whereCondition['color'] = { id: colorId };

      const [products, total] = await this.productRepository.findAndCount({
        relations: ['brand', 'category', 'color'],
        skip,
        take: size,
        where: whereCondition,
      });

      return {
        data: Array.isArray(products) ? products : [],
        total,
        page,
        lastPage: Math.ceil(total / size),
      };
    } catch (error) {
      throw new ExceptionsHandler();
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
