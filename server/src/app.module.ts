import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from './logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { FacultyMemberModule } from './faculty-member/faculty-member.module';
import { StudentModule } from './student/student.module';
import { ClassroomModule } from './classroom/classroom.module';
import { LectureModule } from './lecture/lecture.module';
import { LectureRecordModule } from './lecture-record/lecture-record.module';
import * as path from 'path';
import { AcceptLanguageResolver, HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n';

@Module({
  imports: [
    AuthorizationModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_API_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    FacultyMemberModule,
    StudentModule,
    ClassroomModule,
    LectureModule,
    LectureRecordModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: HeaderResolver, options: ['en,tr'] },
        AcceptLanguageResolver,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
