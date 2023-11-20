import { Seeder } from 'typeorm-seeding';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

export default class CreateProductSeed implements Seeder {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  public async run(): Promise<any> {
    const products = [
      {
        name: 'Iphone 12',
        price: 1000,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Iphone 11',
        price: 900,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy S20',
        price: 800,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy Note 10',
        price: 750,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      // Additional 15 entries
      {
        name: 'Iphone SE',
        price: 450,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Iphone XR',
        price: 600,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy A52',
        price: 400,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy Z Flip',
        price: 1200,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Iphone 13',
        price: 1100,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Iphone 13 Pro',
        price: 1300,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy S21',
        price: 850,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy S21 Ultra',
        price: 1300,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Iphone 13 Mini',
        price: 700,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Iphone 12 Pro',
        price: 1000,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy Note 20',
        price: 950,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy S10',
        price: 650,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Iphone 12 Mini',
        price: 650,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Iphone 11 Pro',
        price: 950,
        brand: { id: 1, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
      {
        name: 'Galaxy S10e',
        price: 550,
        brand: { id: 2, name: 'Apple' },
        category: { id: 1, name: '' },
        color: { id: 9, color: 'Black', hexCode: '#000000' },
      },
    ];
    return await this.productRepository.insert(products);
  }

  async drop(): Promise<any> {
    return await this.productRepository.delete({});
  }
}
