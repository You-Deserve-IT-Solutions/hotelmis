import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PersonService } from '../../services/person/person.service';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get('')
  getPersons() {
    return this.personService.getPersons();
  }

  @Get(':uuid')
  findPersonByUuid(@Param('uuid') uuid: string) {
    return this.personService.findPersonByUuid(uuid);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createPerson(@Body() createPersonDto: any) {
    return this.personService.createPerson(createPersonDto);
  }
}
