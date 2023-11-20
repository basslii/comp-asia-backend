import { Injectable } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Purchase } from './entities/purchase.entity';
import { Repository } from 'typeorm';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class PurchaseService {
  
  constructor(
    @InjectRepository(Purchase)
    private purchaseRepository: Repository<Purchase>,
  ) { }

  create(createPurchaseDto: CreatePurchaseDto) {
    return this.purchaseRepository.save(createPurchaseDto);
  }

  async findAll(page: number = 1, size: number = 5) {

    const skip = (page - 1) * size;

    const [orders, total] = await this.purchaseRepository.findAndCount({
      skip: skip,
      take: size,
    });

    if (orders.length !== size && page * size < total) {
      return;
      // throw new ExceptionsHandler();
    }

    return {
      data: Array.isArray(orders) ? orders : [],
      total: total,
      page: page,
      lastPage: Math.ceil(total / size),
    };
  }

  findOne(id: number) {
    return this.purchaseRepository.findOne({where: { id }});
  }

  update(id: number, updatePurchaseDto: UpdatePurchaseDto) {
    return `This action updates a #${id} purchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchase`;
  }
}
