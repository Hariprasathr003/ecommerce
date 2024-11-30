import { Injectable } from '@nestjs/common';
 // Assuming you have a PrismaService for dependency injection
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    async findAll() {
      return this.prisma.user.findMany();
    }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id: Number(id) } }); 
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

 
  

  async registerUser(createUserDto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });
  
    if (existingUser) {
      throw new Error('A user with this email already exists');
    }

    // const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
 
    return await this.prisma.user.create({
      data: {
        fullName: createUserDto.fullName,
        username: createUserDto.username,
        email: createUserDto.email,
        password: createUserDto.password, 
        phoneNumber: createUserDto.phoneNumber,
        dateOfBirth: createUserDto.dateOfBirth
          ? new Date(createUserDto.dateOfBirth).toISOString()
          : undefined,
        gender: createUserDto.gender,
      },
    });
  }
  
  

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    const { fullName, username, email, password, phoneNumber, dateOfBirth, gender } = updateUserDto;
  
    const formattedDateOfBirth = dateOfBirth ? new Date(dateOfBirth).toISOString() : undefined;
  
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
  
    return this.prisma.user.update({
      where: {
        id: id,  
      },
      data: {
        fullName,
        username,
        email,
        password: hashedPassword, 
        phoneNumber,
        dateOfBirth: formattedDateOfBirth, 
        gender,
      },
    });
  }
  
  
  

  async delete(id: number) {
    return this.prisma.user.delete({ where: { id: Number(id) } }); 
  }
}
