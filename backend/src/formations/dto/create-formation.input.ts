import { InputType, Field, Float } from '@nestjs/graphql';
import {
  IsString,
  IsNumber,
  IsOptional,
  MinLength,
  MaxLength,
  Min,
  Max,
} from 'class-validator';

@InputType()
export class CreateFormationInput {
  @Field()
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  courseName: string;

  @Field()
  @IsString()
  @MinLength(10)
  @MaxLength(500)
  description: string;

  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  duration: string;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  @Max(10000)
  price: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  cover?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  hoverCover?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  backgroundImage?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  formateurNom?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  formateurPrenom?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  formateurEmail?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  formateurSpecialite?: string;
}
