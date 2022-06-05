import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService: ConfigService) => {
        console.log(configService.get('database'))
        return {
          type: 'mysql',
          database:configService.get('database.name'),
          host:configService.get('database.host'),
          username:configService.get('database.user'),
          password:configService.get('database.password'),
          port:+configService.get('database.port'),
          synchronize:true,
          autoLoadEntities:true,
          
        }
      },
      inject:[ConfigService]
    }),
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[TypeOrmModule]


})
export class AppModule { }
