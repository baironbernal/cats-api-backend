import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private CatModel: Model<Cat>) {}

  async findAll(): Promise<Cat[]> {
    return this.CatModel.find().exec();
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.CatModel(createCatDto);
    return createdCat.save();
  }

  async findOne(id: string): Promise<Cat> {
    return this.CatModel.findById(id);
  }

  async update(id: string, cat: UpdateCatDto): Promise<Cat> {
    return this.CatModel.findByIdAndUpdate(id, cat, { new: true });
  }

  async delete(id: string): Promise<Cat> {
    return this.CatModel.findByIdAndDelete(id);
  }
}
