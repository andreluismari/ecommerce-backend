import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("categories") // <-- IMPORTANTE: PLURAL
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}
