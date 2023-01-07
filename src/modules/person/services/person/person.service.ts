import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from 'src/database/entities';
import { CreatePersonDto } from 'src/database/entities/person/dtos/person.dtos';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
  ) {}

  async getPersons() {
    return await this.personRepository.find({
      relations: {
        createdBy: true,
      },
    });
  }

  async createPerson(createPersonDto: CreatePersonDto) {
    const newPerson: any = this.personRepository.create(createPersonDto);
    if (newPerson.createdBy) {
      newPerson.createdBy = (await this.findPersonByUuid(
        newPerson?.createdBy?.uuid,
      )) as Person;
    }

    try {
      return await this.personRepository.save(newPerson);
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

  async findPersonByUuid(uuid: string) {
    return await this.personRepository.findOne({ where: { uuid } });
  }
}
