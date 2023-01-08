import { Module } from '@nestjs/common';
import { AttributesController } from './controllers/attributes/attributes.controller';
import { AttributesService } from './services/attributes/attributes.service';
import { AttributeValuesController } from './controllers/attribute-values/attribute-values.controller';
import { AttributeValuesService } from './services/attribute-values/attribute-values.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute, AttributeValue } from 'src/database/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Attribute]),
    TypeOrmModule.forFeature([AttributeValue]),
  ],
  controllers: [AttributesController, AttributeValuesController],
  providers: [AttributesService, AttributeValuesService],
})
export class AttributesModule {}
