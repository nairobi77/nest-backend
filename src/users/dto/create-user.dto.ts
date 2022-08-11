import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ example: "user@email.ru", description: "User email" })
    @IsString({message: 'Must be string'})
    @IsEmail({}, {message: 'Invalid email'})
    readonly email: string;
    @ApiProperty({ example: "13413asfd3", description: "User password" })
    @IsString({message: 'Must be string'})
    @Length(5, 10, {message: 'Password must have 5-10 symbols'})
    readonly password: string;
}