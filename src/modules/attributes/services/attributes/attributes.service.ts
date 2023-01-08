import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Attribute } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AttributesService {
  constructor(
    @InjectRepository(Attribute)
    private readonly attributeRepository: Repository<Attribute>,
  ) {}

  async getAttributes() {
    return await this.attributeRepository.find({
      relations: {
        createdBy: true,
      },
    });
  }

  async createAttribute(createAttributeDto: any) {
    try {
      return await this.attributeRepository.save(createAttributeDto);
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

  async findAttributeByUuid(uuid: string) {
    return await this.attributeRepository.findOne({ where: { uuid } });
  }
}
