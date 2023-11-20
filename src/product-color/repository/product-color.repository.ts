import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { ProductColor } from "../entities/product-color.entity";

@Injectable()
export class ProductColorRepository extends Repository<ProductColor> {
    
}
