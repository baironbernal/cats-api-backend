import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CatModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_CNN),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
