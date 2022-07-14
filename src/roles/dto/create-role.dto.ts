import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  // @ApiProperty({example: 'user@email.ru', description: 'User email'})
  readonly value: string;
  // @ApiProperty({example: '13413asfd3', description: 'User password'})
  readonly description: string;
}