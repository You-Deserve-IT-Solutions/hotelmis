import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client, Person } from 'src/database/entities';
import { CreateClientDto } from 'src/database/entities/client/dtos/client.dtos';
import { PersonService } from 'src/modules/person/services/person/person.service';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly personService: PersonService,
  ) {}

  async getClients() {
    return await this.clientRepository.find({
      relations: {
        createdBy: true,
        person: true,
      },
    });
  }

  async createClient(createClientDto: CreateClientDto) {
    // First create Person
    const person = {
      firstName: createClientDto.firstName,
      middleName: createClientDto.middleName,
      lastName: createClientDto.lastName,
      gender: createClientDto.gender,
    };
    console.log(person);
    const personResponse = (await this.personService.createPerson(
      person,
    )) as Person;
    const client = {
      person: personResponse,
    };
    const newPerson = this.clientRepository.create(client);

    try {
      return await this.clientRepository.save(newPerson);
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

  async findClientByUuid(uuid: string) {
    return await this.clientRepository.findOne({ where: { uuid } });
  }
}
