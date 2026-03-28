import { InputType, Field } from '@nestjs/graphql';
import { IsString, MinLength, MaxLength, IsEmail } from 'class-validator';

@InputType()
export class CreateFormateurInput {
  @Field()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  nom: string;

  @Field()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  prenom: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  specialite: string;
}