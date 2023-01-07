import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person, Users } from 'src/database/entities';
import { CreateUserDto } from 'src/database/entities/user-authentication/dtos/user.dtos';
import { PersonService } from 'src/modules/person/services/person/person.service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
    private readonly personService: PersonService,
  ) {}

  async getUsers() {
    return await this.userRepository.find({
      relations: {
        createdBy: true,
        person: true,
      },
    });
  }

  async createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    newUser.username = newUser?.username?.toLowerCase();
    if (newUser.createdBy) {
      newUser.createdBy = (await this.personService.findPersonByUuid(
        newUser?.createdBy?.uuid,
      )) as Person;
    }

    if (newUser.person) {
      newUser.person = (await this.personService.findPersonByUuid(
        newUser?.person?.uuid,
      )) as Person;
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
