import { User } from './../../users/entities/user.entity';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { IsString, IsInt, IsOptional, ValidateNested } from 'class-validator';
// todos opcionales porque no siempre actualizaremos todos
export class UpdateCatDto extends PartialType(CreateCatDto) {
    @IsOptional()
    @IsString()
    name: string;
  
    @IsInt()
    @IsOptional()
    age?: number;// cuando se actuliza un gato no est necesario la edad por ?
  
    @IsString()
    @IsOptional()
    breed?: string;

    @ValidateNested()
    @IsOptional()
    owner?:User

}
