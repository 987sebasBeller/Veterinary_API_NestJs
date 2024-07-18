import { Cat } from './entities/cat.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import {MongooseError,Schema } from 'mongoose';

// recibe peticiones y devuelve respuestas
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) :Promise<Cat>{
    try{
      return await this.catsService.create(createCatDto);
    }catch(error){
      throw new HttpException(      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Error creating cat: ' + error.message,
      },
      HttpStatus.BAD_REQUEST);
    
    }
  }
  @Post("postCatsList")
  async createCats(@Body() createCatDto: CreateCatDto[]) :Promise<Cat[]>{
    try{
      return await this.catsService.createCats(createCatDto);
    }catch(error){
      throw new HttpException(      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Error creating cat: ' + error.message,
      },
      HttpStatus.BAD_REQUEST);
    
    }
  }

  @Get()
  async findAll() :Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Schema.Types.ObjectId):Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Patch(':id')//actualiza una parte, 
  async update(@Param('id') id: Schema.Types.ObjectId, @Body() updateCatDto: UpdateCatDto):Promise<Cat> {
    return await this.catsService.update(id, updateCatDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Schema.Types.ObjectId):Promise<Cat> {
    return await this.catsService.remove(id);
  }
}
