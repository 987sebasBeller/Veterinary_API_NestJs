import { User, UserSchema } from './../users/entities/user.entity';
import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Cat, CatSchema } from './entities/cat.entity';
import { MongooseModule } from '@nestjs/mongoose';
// que es lo que utilizo
@Module({
  imports: [MongooseModule.forFeature([
    { name: Cat.name, schema: CatSchema },
    { name: User.name, schema: UserSchema, collection:'users' }
  ])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
