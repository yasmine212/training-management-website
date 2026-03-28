// src/formations/formations.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formation } from './formation.entity';
import { CreateFormationInput } from './dto/create-formation.input';
import { PaginatedFormations } from '../common/paginated-formations.response';

@Injectable()
export class FormationsService {
  constructor(
    @InjectRepository(Formation)
    private readonly formationRepo: Repository<Formation>,
  ) {}

  // Get all formations
  findAll(): Promise<Formation[]> {
    return this.formationRepo.find({ relations: ['clients'] });
  }

  // Get formations with pagination
  async findAllPaginated(
    offset: number = 0,
    limit: number = 10,
  ): Promise<PaginatedFormations> {
    const [data, total] = await this.formationRepo.findAndCount({
      relations: ['clients'],
      skip: offset,
      take: limit,
      order: { createdAt: 'DESC' },
    });

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      total,
      offset,
      limit,
      totalPages,
    };
  }

  // Get a single formation by id
  async findOne(id: number): Promise<Formation> {
    const formation = await this.formationRepo.findOne({
      where: { id },
      relations: ['clients'],
    });
    if (!formation) {
      throw new NotFoundException(`Formation with id ${id} not found`);
    }
    return formation;
  }

  // Create a new formation
  async create(createFormationInput: CreateFormationInput): Promise<Formation> {
    const formation = this.formationRepo.create(createFormationInput);
    return this.formationRepo.save(formation);
  }

  // Update a formation
  async update(
    id: number,
    data: Partial<CreateFormationInput>,
  ): Promise<Formation> {
    await this.formationRepo.update(id, data);
    return this.findOne(id);
  }

  // Remove a formation
  async remove(id: number): Promise<Formation> {
    const formation = await this.findOne(id);
    await this.formationRepo.delete(id);
    return formation;
  }
}
