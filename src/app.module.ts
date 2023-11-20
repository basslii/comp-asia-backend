import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModule } from './product/product.module';
import { ProductColorModule } from './product-color/product-color.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [
    DatabaseModule,
    CategoryModule,
    BrandModule,
    ProductModule,
    ProductColorModule,
    PurchaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
