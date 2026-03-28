import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { Repository } from 'typeorm';
import { Formation } from 'src/formations/formation.entity';
import { CreateClientInput } from './dto/create-client.input';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private clientRepo: Repository<Client>,
    @InjectRepository(Formation)
    private formationRepo: Repository<Formation>,
  ) {}

  async createClient(data: CreateClientInput): Promise<Client> {
    const formation = await this.formationRepo.findOne({
      where: { id: data.formationId },
    });
    if (!formation) {
      throw new NotFoundException('Formation not found');
    }

    const client = this.clientRepo.create({
      name: data.name,
      email: data.email,
      telephone: data.telephone,
      niveauEtude: data.niveauEtude,
      dateNaissance: data.dateNaissance,
      modeFormation: data.modeFormation,
      formation,
    });

    return this.clientRepo.save(client);
  }

  findAllGroupedByFormation(): Promise<Client[]> {
    return this.clientRepo.find({
      relations: ['formation'],
      order: { formation: { courseName: 'ASC' } },
    });
  }

  async findByFormation(formationId: number): Promise<Client[]> {
    return this.clientRepo.find({
      where: { formation: { id: formationId } },
      relations: ['formation'],
    });
  }
}

