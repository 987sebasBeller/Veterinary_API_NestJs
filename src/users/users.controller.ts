import { Schema } from 'mongoose';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return await  this.usersService.create(createUserDto);
  }
  @Post('postUsersList')
  async createUsers(@Body() createUserDto: CreateUserDto[]) {
    console.log(createUserDto)
    return await  this.usersService.createUsers(createUserDto);
  }

  @Get()
  async findAll() {
    return await  this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Schema.Types.ObjectId) {
    return await  this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: Schema.Types.ObjectId, @Body() updateUserDto: UpdateUserDto) {
    return await  this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Schema.Types.ObjectId) {
    return await this.usersService.remove(id);
  }
}
