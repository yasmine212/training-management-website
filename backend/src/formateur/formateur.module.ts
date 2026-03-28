import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formateur } from './formateur.entity';
import { FormateurService } from './formateur.service';
import { FormateurResolver } from './formateur.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Formateur])],
  providers: [FormateurService, FormateurResolver],
  exports: [FormateurService],
})
export class FormateurModule {}