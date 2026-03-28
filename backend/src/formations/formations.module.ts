import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formation } from './formation.entity';
import { FormationsService } from './formations.service';
import { FormationResolver } from './formations.resolver';
import { ClientsModule } from '../clients/clients.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Formation]),
    ClientsModule,
  ],
  providers: [FormationsService, FormationResolver],
})
export class FormationsModule {}
