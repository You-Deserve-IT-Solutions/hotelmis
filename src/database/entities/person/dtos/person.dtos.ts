import { IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  @MinLength(2)
  firstName: string;

  middleName: string;

  @IsNotEmpty()
  @MinLength(2)
  lastName: string;

  @Length(1)
  gender: string;
}
