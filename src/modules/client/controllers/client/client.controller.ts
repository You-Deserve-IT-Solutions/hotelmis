import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientService } from '../../services/client/client.service';

@Controller('api/client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get('')
  getClients() {
    return this.clientService.getClients();
  }

  @Get(':uuid')
  findClientByUuid(@Param('uuid') uuid: string) {
    return this.clientService.findClientByUuid(uuid);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createClient(@Body() createPersonDto: any) {
    return this.clientService.createClient(createPersonDto);
  }
}
