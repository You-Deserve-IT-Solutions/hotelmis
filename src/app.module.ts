import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import entities from './database/entities';
import { AttributesModule } from './modules/attributes/attributes.module';
import { ClientModule } from './modules/client/client.module';
import { PersonModule } from './modules/person/person.module';
import { UserAuthenticationModule } from './modules/user-authentication/user-authentication.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PersonModule,
    UserAuthenticationModule,
    ClientModule,
    AttributesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
