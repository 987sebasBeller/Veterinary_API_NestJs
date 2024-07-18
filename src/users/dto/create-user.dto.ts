import { IsInt, IsString, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name:string;
    @IsInt()
    age:number;
}
