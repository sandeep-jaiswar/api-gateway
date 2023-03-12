import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class UpdateProductDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export default UpdateProductDto;
