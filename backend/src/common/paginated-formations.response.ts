import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Formation } from '../formations/formation.entity';

@ObjectType()
export class PaginatedFormations {
  @Field(() => [Formation])
  data: Formation[];

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  offset: number;

  @Field(() => Int)
  limit: number;

  @Field(() => Int)
  totalPages: number;
}
