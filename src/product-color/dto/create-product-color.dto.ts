import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductColorDto {
    @ApiProperty({ example: 'Black' })
    @IsNotEmpty()
    color: string;

    @ApiProperty({example: '#000000'})
    // @IsNotEmpty()
    hexCode: string;
}
