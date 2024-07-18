import { User } from './../../users/entities/user.entity';

// cuales son las propiedades que tendran las entidades (El objeto)
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument} from 'mongoose';
import mongoose from 'mongoose';
export type CatDocument = HydratedDocument<Cat>;
// el esquema de la coleccion cat de la bd
@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop({type:mongoose.Schema.Types.ObjectId,ref:'User'})// hacemos referencia a nuestro schema importado 
  owner:User
}

export const CatSchema = SchemaFactory.createForClass(Cat);