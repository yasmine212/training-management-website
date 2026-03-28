import { Mutation, Args, Int, Parent, ResolveField } from '@nestjs/graphql';
import { FormationsService } from './formations.service';
import { Formation } from './formation.entity';
import { CreateFormationInput } from './dto/create-formation.input';
import { UpdateFormationInput } from './dto/update-formation.input';
import { Resolver, Query } from '@nestjs/graphql';
import { Client } from 'src/clients/client.entity';
import { ClientsService } from 'src/clients/clients.service';
import { PaginatedFormations } from 'src/common/paginated-formations.response';

/**
 * FormationResolver handles all GraphQL queries and mutations for Formation entities.
 * Provides CRUD operations for courses/formations and relationship resolution for clients.
 */
@Resolver(() => Formation)
export class FormationResolver {
  constructor(
    private readonly formationsService: FormationsService,
    private readonly clientsService: ClientsService,
  ) {}

  /**
   * Query: Fetch all formations without pagination.
   * @returns Promise<Formation[]> - Array of all formations
   */
  @Query(() => [Formation], { name: 'findAllFormations' })
  findAll(): Promise<Formation[]> {
    return this.formationsService.findAll();
  }

  /**
   * Query: Fetch formations with pagination support.
   * @param offset - Number of records to skip (default: 0)
   * @param limit - Number of records to return (default: 10)
   * @returns Promise<PaginatedFormations> - Paginated formations with metadata
   */
  @Query(() => PaginatedFormations, { name: 'findFormationsPaginated' })
  async findAllPaginated(
    @Args('offset', { type: () => Int, defaultValue: 0 }) offset: number,
    @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
  ): Promise<PaginatedFormations> {
    return this.formationsService.findAllPaginated(offset, limit);
  }

  /**
   * Query: Fetch a single formation by ID.
   * @param id - Formation ID
   * @returns Promise<Formation | null> - Formation object or null if not found
   */
  @Query(() => Formation, { nullable: true })
  findOne(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Formation | null> {
    return this.formationsService.findOne(id);
  }

  /**
   * Mutation: Create a new formation.
   * @param createFormationInput - Input DTO with formation data
   * @returns Promise<Formation> - Newly created formation
   */
  @Mutation(() => Formation)
  createFormation(
    @Args('createFormationInput') createFormationInput: CreateFormationInput,
  ) {
    return this.formationsService.create(createFormationInput);
  }

  /**
   * Mutation: Update an existing formation.
   * @param id - Formation ID to update
   * @param data - Partial formation data to update
   * @returns Promise<Formation> - Updated formation
   */
  @Mutation(() => Formation)
  updateFormation(
    @Args('id', { type: () => Int }) id: number,
    @Args('data') data: UpdateFormationInput,
  ): Promise<Formation> {
    return this.formationsService.update(id, data);
  }

  /**
   * Mutation: Delete a formation by ID.
   * @param id - Formation ID to delete
   * @returns Promise<Formation> - Deleted formation
   */
  @Mutation(() => Formation)
  removeFormation(@Args('id', { type: () => Int }) id: number) {
    return this.formationsService.remove(id);
  }

  /**
   * ResolveField: Get all clients enrolled in a formation.
   * Automatically resolved when clients field is requested in GraphQL query.
   * @param formation - Parent formation object
   * @returns Promise<Client[]> - Array of clients in the formation
   */
  @ResolveField(() => [Client])
  async clients(@Parent() formation: Formation) {
    return this.clientsService.findByFormation(formation.id);
  }
}
