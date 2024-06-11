import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateAuthDto {
    @IsNotEmpty()
    username: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
}
