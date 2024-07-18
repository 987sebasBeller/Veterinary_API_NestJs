import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Schema, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel:Model<UserDocument>){

  }
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    return await this.userModel.create(createUserDto);
  }
  async createUsers(createUserDto: CreateUserDto[]) {
    console.log(createUserDto)
    return await this.userModel.create(createUserDto);
  }


  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: Schema.Types.ObjectId) {
    return await this.userModel.findById(id);
  }

  async update(id: Schema.Types.ObjectId, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id,updateUserDto);
  }

  async remove(id: Schema.Types.ObjectId) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
