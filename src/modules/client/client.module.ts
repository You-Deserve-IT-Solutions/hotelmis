import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client, Person } from 'src/database/entities';
import { PersonService } from '../person/services/person/person.service';
import { ClientController } from './controllers/client/client.controller';
import { ClientService } from './services/client/client.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    TypeOrmModule.forFeature([Person]),
  ],
  controllers: [ClientController],
  providers: [ClientService, PersonService],
})
export class ClientModule {}
