import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async getClients() {
    return await this.clientRepository.find({
      relations: {
        createdBy: true,
      },
    });
  }

  async createClient(createPersonDto: any) {
    const newPerson = this.clientRepository.create(createPersonDto);

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
