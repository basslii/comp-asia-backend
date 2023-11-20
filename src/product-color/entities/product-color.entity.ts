import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Color' })
export class ProductColor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    color: string;

    @Column()
    hexCode: string;

    @OneToMany(() => Product, (product) => product.color)
    products: Product[];
}
