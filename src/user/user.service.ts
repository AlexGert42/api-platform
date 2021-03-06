import { RolesService } from './../roles/roles.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUrerDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UserService {
    constructor(@InjectModel(User)
    private userRepository: typeof User,
        private rolesService: RolesService
    ) { }


    async createUser(dto: CreateUrerDto) {
        const user = await this.userRepository.create(dto)
        const role = await this.rolesService.getRoleByValue("USER")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user
    } 

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}})
        return users
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }
}
