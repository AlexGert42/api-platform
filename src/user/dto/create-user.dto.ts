import { ApiProperty } from '@nestjs/swagger';

export class CreateUrerDto {
    @ApiProperty({example: '@email.com', description: 'email'})
    readonly email: string
    @ApiProperty({example: 'root', description: 'password'})
    readonly password: string
}

// export class AllUsersDto {
//     readonly users: CreateUrerDto[]
// }