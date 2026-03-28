import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FormateurService } from './formateur.service';
import { Formateur } from './formateur.entity';
import { CreateFormateurInput } from './dto/create-formateur.input';

@Resolver(() => Formateur)
export class FormateurResolver {
  constructor(private readonly formateurService: FormateurService) {}

  @Query(() => [Formateur])
  findAllFormateurs() {
    return this.formateurService.findAll();
  }

  @Query(() => Formateur)
  findFormateur(@Args('id', { type: () => Int }) id: number) {
    return this.formateurService.findOne(id);
  }

  @Mutation(() => Formateur)
  createFormateur(
    @Args('createFormateurInput') createFormateurInput: CreateFormateurInput,
  ) {
    return this.formateurService.create(createFormateurInput);
  }

  @Mutation(() => Formateur)
  updateFormateur(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: CreateFormateurInput,
  ) {
    return this.formateurService.update(id, data);
  }

  @Mutation(() => Formateur)
  removeFormateur(@Args('id', { type: () => Int }) id: number) {
    return this.formateurService.remove(id);
  }
}
