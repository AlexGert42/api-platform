import { RolesService } from './roles.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './role.model';
import { CreateRoleDto } from './dto/create-role.dto';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Create role'})
    @ApiResponse({status: 200, type: Role})
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto)
    }  


    @ApiOperation({summary: 'Get role'})
    @ApiResponse({status: 200, type: Role})
    @Get('/:value')
    getRole(@Param('value') value: string) {
        return this.roleService.getRoleByValue(value)
    }
}
