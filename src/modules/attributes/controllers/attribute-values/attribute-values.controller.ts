import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AttributeValuesService } from '../../services/attribute-values/attribute-values.service';

@Controller('api/attribute-values')
export class AttributeValuesController {
  constructor(
    private readonly attributeValuesService: AttributeValuesService,
  ) {}

  @Get('')
  getAttributeValues() {
    return this.attributeValuesService.getAttributeValues();
  }

  @Get(':uuid')
  findAttributeValueByUuid(@Param('uuid') uuid: string) {
    return this.attributeValuesService.findAttributeValueByUuid(uuid);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createAttributeValue(@Body() createAttributeValueDto: any) {
    return this.attributeValuesService.createAttributeValue(
      createAttributeValueDto,
    );
  }
}
