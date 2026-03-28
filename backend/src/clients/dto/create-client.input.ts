import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsString,
  IsEmail,
  IsPhoneNumber,
  IsInt,
  MinLength,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateClientInput {
  @Field()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  telephone: string;

  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  niveauEtude: string;

  @Field()
  @IsString()
  dateNaissance: string;

  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  modeFormation: string;

  @Field(() => Int)
  @IsInt()
  formationId: number;
}
