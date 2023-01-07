import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person, Users } from 'src/database/entities';
import { PersonService } from '../person/services/person/person.service';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    TypeOrmModule.forFeature([Person]),
  ],
  controllers: [UserController],
  providers: [UserService, PersonService],
})
export class UserAuthenticationModule {}
