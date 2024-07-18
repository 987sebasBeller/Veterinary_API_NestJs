import { User } from './../../users/entities/user.entity';
// reflejar las entidades, antes de enviar al servicio
// desecturar un objeto const [datos, id]=getData();
// se usa en la validacion de datos
import { IsString, IsInt, IsNotEmpty, IsOptional,ValidateNested } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  name: string;

  // @IsInt() // la propiedad age es si o si un entero
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  breed?: string;
  
  @ValidateNested()// que referencie a alguien
  @IsOptional()
  owner?:User
  // IsMail() -> si o si correo
}
