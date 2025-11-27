import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../categories/category.entity";
import { Brand } from "../brands/brand.entity";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column("text", { nullable: true })
  description: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column("boolean", { default: true })
  active: boolean;

  @Column({ type: "text", nullable: true })
  image_url: string; // 🔥 nova coluna

  @Column("uuid")
  categoryId: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: "categoryId" })
  category: Category;

  @Column("uuid")
  brandId: string;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: "brandId" })
  brand: Brand;
}
