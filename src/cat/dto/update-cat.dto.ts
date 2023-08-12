import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCatDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  race: string;

  @IsNumber()
  @IsOptional()
  age: number;
}
