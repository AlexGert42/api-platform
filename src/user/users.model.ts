import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/role.model";
import { UserRoles } from "src/roles/user-roles.model";


interface userCreationAtribute {
    email: string
    password: string
}

@Table({ tableName: 'user' })
export class User extends Model<User, userCreationAtribute> {

    @ApiProperty({ example: '1', description: 'id' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: string

    @ApiProperty({ example: 'user@gmail.com', description: 'email' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string

    @ApiProperty({ example: 'root', description: 'password' })
    @Column({ type: DataType.STRING, allowNull: false })
    password: string

    @ApiProperty({ example: 'banned', description: 'true & false' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}