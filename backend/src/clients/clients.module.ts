import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';
import { ClientsResolver } from './clients.resolver';
import { Client } from './client.entity';
import { Formation } from 'src/formations/formation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Formation])],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsResolver],
  exports: [ClientsService],
})
export class ClientsModule {}
