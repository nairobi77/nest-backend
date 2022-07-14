import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: "user@email.ru", description: "User email" })
    readonly email: string;
    @ApiProperty({ example: "13413asfd3", description: "User password" })
    readonly password: string;
}