import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/database/entities/user-authentication/dtos/user.dtos';
import { UserService } from '../../services/user/user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':uuid')
  findUsersByUuid(@Param('uuid') uuid: string) {
    return this.userService.findUsersByUuid(uuid);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
