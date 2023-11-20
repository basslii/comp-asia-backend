import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePurchaseDto {

    @IsNotEmpty()
    @ApiProperty()
    productId: number;

    @IsNotEmpty()
    @ApiProperty()
    productName: string;

    @IsNotEmpty()
    @ApiProperty()
    productColor: string;
}
