import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from 'prisma/prisma.service';
import { ServeStaticModule } from '@nestjs/serve-static';  // Import the ServeStaticModule
import { join } from 'path';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { PrismaModule } from 'prisma/prisma.module';


@Module({
  imports: [
    PrismaModule,UserModule,AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..','src', 'public'), 
      serveRoot: '/'
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'assets'),
      serveRoot: '/assets',
    }),
  
  ],
  controllers: [UserController],
  providers: [UserService], 
})
export class AppModule {}



