import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsNotEmpty, IsNumber } from "class-validator";
import { Product } from "src/product/entities/product.entity";

export class CreateBrandDto {
    @ApiProperty({example: 'Apple'})
    @IsNotEmpty()
    name: string;
}
