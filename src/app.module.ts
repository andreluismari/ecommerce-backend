/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import {BrandModule}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'aws-0-sa-east-1.pooler.supabase.com',
      port: +'5432',
      username: 'postgres.voplxfqkgtorzyssxzzl',
      password: 'Unimater123@!',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true
    }),
    CategoryModule,
    BrandModule
  ],
})
export class AppModule { }