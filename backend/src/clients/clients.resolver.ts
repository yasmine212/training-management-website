import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { ClientsService } from './clients.service';
import { Client } from './client.entity';
import { Formation } from '../formations/formation.entity';
import { CreateClientInput } from './dto/create-client.input';

@Resolver(() => Client)
export class ClientsResolver {
  constructor(private readonly clientsService: ClientsService) {}

  @Query(() => [Client])
  findAllClients(): Promise<Client[]> {
    return this.clientsService.findAllGroupedByFormation();
  }

  @Query(() => [Client])
  findClientsByFormation(
    @Args('formationId', { type: () => Int }) formationId: number,
  ): Promise<Client[]> {
    return this.clientsService.findByFormation(formationId);
  }

  @Mutation(() => Client)
  createClient(
    @Args('createClientInput') createClientInput: CreateClientInput,
  ): Promise<Client> {
    return this.clientsService.createClient(createClientInput);
  }
}
