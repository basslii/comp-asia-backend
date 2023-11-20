import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './seeder.service';
import { Product } from 'src/product/entities/product.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { Category } from 'src/category/entities/category.entity';
import { ProductColor } from 'src/product-color/entities/product-color.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Brand]),
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([ProductColor]),
],
  providers: [SeederService],
  exports: [SeederService],
})
export class SeederModule {}
