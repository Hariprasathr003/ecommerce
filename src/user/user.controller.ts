import { Controller, Get, Post, Patch, Delete, Body, Param, Render, Res, HttpStatus, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')

export class UserController {
  authService: any;
  constructor(private readonly usersService: UserService) {}

  @Get()
  @Render('index.html') 
  getUsers() {
    return this.usersService.findAll();
  }

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.registerUser(createUserDto);
    return { message: 'User created successfully', user: newUser }; 
  }


  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
