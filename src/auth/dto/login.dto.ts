import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class LoginDto {
    username: string;
    @IsEmail()
    email: string;
    @IsNotEmpty()
    password: string;
}
