import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Brand } from 'src/brand/entities/brand.entity';
import { Category } from 'src/category/entities/category.entity';
import { ProductColor } from 'src/product-color/entities/product-color.entity';
import { SeederService } from 'src/database/seed/seeder.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Brand, Category, ProductColor])],
  controllers: [ProductController],
  providers: [ProductService, SeederService]
})
export class ProductModule {}
