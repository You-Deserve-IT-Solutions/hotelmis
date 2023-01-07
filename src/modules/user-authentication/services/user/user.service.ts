import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/database/entities';
import { CreateUserDto } from 'src/database/entities/user-authentication/dtos/user.dtos';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  async getUsers() {
    return await this.userRepository.find({
      relations: {
        createdBy: true,
      },
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    newUser.username = newUser?.username?.toLowerCase();
    if (newUser.createdBy) {
      newUser.createdBy = (await this.findUsersByUuid(
        newUser?.createdBy?.uuid,
      )) as Users;
    }

    try {
      return await this.userRepository.save(newUser);
    } catch (error) {
      // TODO: Find a better way to handle returned errors
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: {
            message: error?.driverError?.detail,
            name: error?.driverError?.name,
            code: error?.driverError?.code,
          },
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  async findUsersByUuid(uuid: string) {
    return await this.userRepository.findOne({ where: { uuid } });
  }
}
