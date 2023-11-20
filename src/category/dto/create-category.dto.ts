import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Brand } from "src/brand/entities/brand.entity";

export class CreateCategoryDto {
    @ApiProperty({example: 'tablet'})
    @IsNotEmpty()
    name: string;
}
