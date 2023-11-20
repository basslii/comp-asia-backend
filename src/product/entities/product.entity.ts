import { Brand } from "src/brand/entities/brand.entity";
import { Category } from "src/category/entities/category.entity";
import { ProductColor } from "src/product-color/entities/product-color.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Product' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @ManyToOne(() => Brand, brand => brand.name)
    brand: Brand;

    @ManyToOne(() => Category, category => category.name)
    category: Category;

    @ManyToOne(() => ProductColor, productColor => productColor.color)
    color: ProductColor;
}