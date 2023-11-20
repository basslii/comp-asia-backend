import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'compasia',
            autoLoadEntities: true,
            synchronize: true,
            // insecureAuth: true,
        }),
    ],
})
export class DatabaseModule { }
