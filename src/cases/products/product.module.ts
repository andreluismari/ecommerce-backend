import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";
import { CategoryModule } from "../categories/category.module";  // Importando o CategoryModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),  // Carrega a entidade Product
    CategoryModule,  // Importe o CategoryModule para acessar o CategoryService
  ],
  providers: [ProductService],  // Apenas o ProductService aqui
  controllers: [ProductController],  // Adiciona o ProductController
})
export class ProductModule {}
