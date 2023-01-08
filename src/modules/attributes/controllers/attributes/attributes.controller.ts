import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AttributesService } from '../../services/attributes/attributes.service';

@Controller('api/attributes')
export class AttributesController {
  constructor(private readonly attributesService: AttributesService) {}

  @Get('')
  getAttributes() {
    return this.attributesService.getAttributes();
  }

  @Get(':uuid')
  findAttributeByUuid(@Param('uuid') uuid: string) {
    return this.attributesService.findAttributeByUuid(uuid);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createAttribute(@Body() createAttributeDto: any) {
    return this.attributesService.createAttribute(createAttributeDto);
  }
}
