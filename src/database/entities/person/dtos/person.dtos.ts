import { IsNotEmpty, Length, MinLength } from 'class-validator';

export class CreatePersonDto {
  @IsNotEmpty()
  @MinLength(2)
  firstname: string;

  middlname: string;

  @IsNotEmpty()
  @MinLength(2)
  lastname: string;

  @Length(1)
  gender: string;
}
