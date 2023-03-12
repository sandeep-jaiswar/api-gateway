import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

class UpdateUserDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  mobile: string;
}

export default UpdateUserDto;
