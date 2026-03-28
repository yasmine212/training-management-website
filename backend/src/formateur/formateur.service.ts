import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Formateur } from './formateur.entity';
import { CreateFormateurInput } from './dto/create-formateur.input';

@Injectable()
export class FormateurService {
  constructor(
    @InjectRepository(Formateur)
    private readonly formateurRepo: Repository<Formateur>,
  ) {}

  findAll(): Promise<Formateur[]> {
    return this.formateurRepo.find({ relations: ['formations'] });
  }

  async findOne(id: number): Promise<Formateur> {
    const formateur = await this.formateurRepo.findOne({
      where: { id },
      relations: ['formations'],
    });
    if (!formateur) {
      throw new NotFoundException(`Formateur with id ${id} not found`);
    }
    return formateur;
  }

  create(data: CreateFormateurInput): Promise<Formateur> {
    const formateur = this.formateurRepo.create(data);
    return this.formateurRepo.save(formateur);
  }

  async update(id: number, data: Partial<Formateur>): Promise<Formateur> {
    await this.formateurRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<Formateur> {
    const formateur = await this.findOne(id);
    await this.formateurRepo.delete(id);
    return formateur;
  }
}