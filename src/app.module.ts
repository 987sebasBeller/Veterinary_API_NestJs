import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/veterinary')
    ,CatsModule
    , UsersModule],
  controllers: [AppController],
  providers: [AppService
  ],
})
export class AppModule {}
