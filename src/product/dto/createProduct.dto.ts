import { IsNotEmpty, IsString } from 'class-validator';

class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export default CreateProductDto;
