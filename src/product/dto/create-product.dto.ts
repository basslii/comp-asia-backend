import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Brand } from "src/brand/entities/brand.entity";
import { Category } from "src/category/entities/category.entity";
import { ProductColor } from "src/product-color/entities/product-color.entity";

export class CreateProductDto {
    @IsString()
    @ApiProperty()
    name: string;

    @IsNumber()
    @ApiProperty()
    price: number;

    @IsString()
    @ApiProperty({ example: { id: 1, name: 'apple' } })
    brand: Brand;

    @IsString()
    @ApiProperty({example: {id: 1, name: 'tablet'}})
    category: Category;

    @ApiProperty({ example: { color: 'Black', hexCode: '#000000' } })
    @IsNotEmpty()
    color: ProductColor;
}