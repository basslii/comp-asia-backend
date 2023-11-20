import { Injectable } from '@nestjs/common';
import { CreateProductColorDto } from './dto/create-product-color.dto';
import { UpdateProductColorDto } from './dto/update-product-color.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductColor } from './entities/product-color.entity';

@Injectable()
export class ProductColorService {
  constructor(
    @InjectRepository(ProductColor)
    private productColorRepository: Repository<ProductColor>,
  ) { }
  
  create(createProductColorDto: CreateProductColorDto) {
    return this.productColorRepository.save(createProductColorDto)
  }

  findAll() {
    return this.productColorRepository.find()
  }

  findOne(id: number) {
    return this.productColorRepository.findOne({ where: { id } })

  }

  update(id: number, updateProductColorDto: UpdateProductColorDto) {
    return `This action updates a #${id} productColor`;
  }

  remove(id: number) {
    return `This action removes a #${id} productColor`;
  }
}
