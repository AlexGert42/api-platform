import { ApiProperty } from "@nestjs/swagger"


export class CreateRoleDto {
    @ApiProperty({example: 'admin', description: 'value role'})
    readonly value: string
    @ApiProperty({example: 'description', description: 'description role'})
    readonly description: string

}