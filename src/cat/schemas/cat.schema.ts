import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema({
  timestamps: true,
})
export class Cat {
  @Prop({
    unique: true,
    required: true,
    trim: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  url_image: string;

  @Prop({
    trim: true,
  })
  race: string;

  @Prop({
    trim: true,
  })
  age: number;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
