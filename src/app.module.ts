import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TasksModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
