import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export class TypeOrmOptionsFactory {
    static createTypeOrmOptions(): TypeOrmModuleOptions {
        const typeOrmModuleOptions: TypeOrmModuleOptions = {
            type: 'mysql',
            replication: {
                master: {
                    host: process.env.DATABASE_HOST,
                    port: +process.env.DATABASE_PORT,
                    database: process.env.DATABASE_DB,
                    username: process.env.DATABASE_USER,
                    password: process.env.DATABASE_PASSWORD,
                    ssl: false,
                },
                slaves: [{
                    host: process.env.DATABASE_HOST,
                    port: +process.env.DATABASE_PORT,
                    database: process.env.DATABASE_DB,
                    username: process.env.DATABASE_USER,
                    password: process.env.DATABASE_PASSWORD,
                    ssl: false,
                }]
            },
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: false,
            logging: (process.env.DATABASE_LOGGING === "true") || false,
            migrationsRun: true,
            migrations: ["dist/migration/*.js"],
        }

        return typeOrmModuleOptions;
    }
}
