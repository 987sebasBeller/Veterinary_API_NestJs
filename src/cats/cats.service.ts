import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './entities/cat.entity';
import { Model, Schema } from 'mongoose';
// la logica del negocio

// usa un solo servicio y extiendo en otros partes mas complejas, cuando la logica es compleja, modelo MVC
@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catsModel: Model<CatDocument>) {

  }
  async create(createCatDto: CreateCatDto):Promise<Cat> {

    console.log(createCatDto);
      const newCat = await this.catsModel.create(createCatDto);
      return newCat;
  }
  async createCats(createCatDto: CreateCatDto[]) :Promise<Cat[]>{
      const newCat = await this.catsModel.create(createCatDto);
      return newCat;
  }
  async findAll():Promise<Cat[]> {
    const allCats = await this.catsModel.find().populate("owner");
    return allCats;
  }

  async findOne(id: Schema.Types.ObjectId) :Promise<Cat>{
    try{
    const catFound = (await this.catsModel.findById(id)).populate("owner");
    return catFound;
    }catch(error){
      throw new HttpException({status:HttpStatus.BAD_REQUEST,message:"Error:"+error.message},HttpStatus.BAD_REQUEST)
    }
  }

  async update(id: Schema.Types.ObjectId, updateCatDto: UpdateCatDto):Promise<Cat> {
    return await this.catsModel.findByIdAndUpdate(id, updateCatDto);
  }

  async remove(id: Schema.Types.ObjectId):Promise<Cat> {
    return  await this.catsModel.findByIdAndDelete(id);
  }
}
