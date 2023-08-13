import { Body, ConflictException, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put } from '@nestjs/common';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';

@Controller('Cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  async findAll() {
    const cats = await this.catService.findAll();
    if(!cats) throw new NotFoundException('No se encontraron gatitos');
    return cats;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cat =  await this.catService.findOne(id);
    if (!cat) throw new NotFoundException('Gatito no encontrado');
    return cat;
  }

  @Post()
  async create(@Body() body: CreateCatDto) {
    try {
      return await this.catService.create(body);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Gatito ya existe');
      }
      throw error;
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    const cat = await this.catService.update(id, body);
    if(!cat) throw new ConflictException('Gatito ya existe');
    return cat;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const cat = await this.catService.delete(id);
    if(!cat) throw new NotFoundException('Gatito no encontrado');
    return cat;
  }

 
}
