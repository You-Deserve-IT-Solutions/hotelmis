import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttributeValue } from 'src/database/entities';
import { Repository } from 'typeorm';

@Injectable()
export class AttributeValuesService {
  constructor(
    @InjectRepository(AttributeValue)
    private readonly attributeValueRepository: Repository<AttributeValue>,
  ) {}

  async getAttributeValues() {
    return await this.attributeValueRepository.find({
      relations: {
        createdBy: true,
      },
    });
  }

  async createAttributeValue(createAttributeValueDto: any) {
    try {
      return await this.attributeValueRepository.save(createAttributeValueDto);
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

  async findAttributeValueByUuid(uuid: string) {
    return await this.attributeValueRepository.findOne({ where: { uuid } });
  }
}
