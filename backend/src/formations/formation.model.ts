import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class FormationModel {
  @Field(() => Int)
  id: number;

  @Field()
  cover: string;

  @Field()
  hoverCover: string;

  @Field()
  backgroundImage: string;

  @Field()
  courseName: string;

  @Field()
  course: string;

  @Field()
  description: string;

  @Field()
  duration: string;

  @Field(() => Float)
  price: number;

  // Inline formateur fields
  @Field()
  formateurNom: string;

  @Field()
  formateurPrenom: string;

  @Field()
  formateurEmail: string;

  @Field()
  formateurSpecialite: string;
}
