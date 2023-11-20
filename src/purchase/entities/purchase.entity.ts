import { Product } from "src/product/entities/product.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Purchase'})
export class Purchase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    productId: number;

    @Column()
    productName: string;

    @Column()
    productColor: string;

    @CreateDateColumn({ name: 'created_at', nullable: false, type: 'timestamp' })
    createdAt: Date;
}
