import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './logger.middleware';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [AuthorizationModule,ConfigModule.forRoot(),MongooseModule.forRootAsync({
    imports: [ConfigModule],
    connectionName:"mongoose",
    useFactory: async (config: ConfigService) => ({
      uri: config.get('MONGODB_API_URL'),
      useNewUrlParser: true,
      useUnifiedTopology: true,
     }),
     inject: [ConfigService],
    
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
