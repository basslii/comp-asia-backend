import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";

@Injectable()
export class ProductRepository extends Repository<Product> {
    
}
