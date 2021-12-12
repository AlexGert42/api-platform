import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, BelongsToMany } from "sequelize-typescript";
import { User } from "src/user/users.model";
import { UserRoles } from "./user-roles.model";


interface RoleCreationAtribute {
    value: string
    description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAtribute> {

    @ApiProperty({ example: '1', description: 'id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number

    @ApiProperty({ example: 'admin', description: 'Role user' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string

    @ApiProperty({ example: 'admin description', description: 'description' })
    @Column({ type: DataType.STRING, allowNull: false })
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}