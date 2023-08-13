import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  race: string;

  @IsString()
  @IsNotEmpty()
  url_image: string;

  @IsNumber()
  @IsOptional()
  age: number;
}
