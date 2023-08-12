import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';

@Controller('Cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  findAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'FInd one Cat';
  }

  @Post()
  create(@Body() body: CreateCatDto) {
    this.catService.create(body);
    return 'Create Cat';
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.catService.delete(id);
    return 'Delete Cat';
  }
}
