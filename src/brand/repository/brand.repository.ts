import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Brand } from "../entities/brand.entity";

@Injectable()
export class BrandRepository extends Repository<Brand> {
    
}
