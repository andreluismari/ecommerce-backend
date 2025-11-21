import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import { BrandModule } from './cases/brands/brand.module';
import { ProductModule } from './cases/produtcts/product.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    // ✅ Forçando o carregamento do .env correto
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), '.env'),
    }),

    // ✅ Logs para a gente conferir se o .env está sendo lido certo
    {
      module: class DebugEnvModule {},
      providers: [
        {
          provide: 'ENV_DEBUG',
          useFactory: () => {
            console.log('🔍 DB_USER LIDO:', process.env.DB_USER);
            console.log('🔍 DB_HOST LIDO:', process.env.DB_HOST);
            console.log('🔍 DB_PASS LIDO:', process.env.DB_PASS?.slice(0, 3) + '***');
            return true;
          }
        }
      ],
    },

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),

      username: process.env.DB_USER, // EX: postgres.voplxfqkgtorzyssxzzl
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,

      // ✅ SSL obrigatório no Supabase
      ssl: {
        rejectUnauthorized: false,
      },

      autoLoadEntities: true,
      synchronize: true,
    }),

    CategoryModule,
    BrandModule,
    ProductModule,
  ],
})
export class AppModule {}
