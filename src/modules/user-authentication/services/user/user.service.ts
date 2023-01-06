import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities';
import { CreateUserDto } from 'src/database/entities/user-authentication/dtos/user.dtos';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUsers() {
    return await this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    newUser.username = newUser?.username?.toLowerCase();
    return await this.userRepository.save(newUser);
  }

  async findUsersByUuid(uuid: string) {
    return await this.userRepository.findOne({ where: { uuid } });
  }
}
