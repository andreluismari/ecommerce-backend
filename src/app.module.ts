/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import { BrandModule } from './cases/brands/brand.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.voplxfqkgtorzyssxzzl.supabase.co',
      port: +'5432',
      username: 'postgres',
      password: 'Unimater123@!',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      ssl: { rejectUnauthorized: false }, // Supabase
    }),
    CategoryModule,
    BrandModule,
  ],
})
export class AppModule {}
