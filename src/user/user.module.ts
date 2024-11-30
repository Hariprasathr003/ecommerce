import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import {  UserController } from './user.controller';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';
  
@Module({
  imports: [PrismaModule],
  providers: [UserService, PrismaService],
  controllers: [UserController],
  exports: [UserService], 
})
export class UserModule {}



