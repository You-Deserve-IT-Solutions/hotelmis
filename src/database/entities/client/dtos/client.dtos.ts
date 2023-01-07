import { IsNotEmpty, Length, MinLength } from 'class-validator';
import { Person } from '../../person/person';

export class CreateClientDto {
  person: Person;
  @MinLength(2)
  firstName?: string;

  middleName?: string;

  @MinLength(2)
  lastName?: string;

  @Length(1)
  gender?: string;
}
