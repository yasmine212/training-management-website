import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  create(@Body() body: any) {
    return this.clientsService.createClient(body);
  }

@Get('grouped')
getClientsGrouped() {
  return this.clientsService.findAllGroupedByFormation();
}

}
