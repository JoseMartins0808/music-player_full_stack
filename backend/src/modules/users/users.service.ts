import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {

  constructor(private userRepository: UsersRepository) { }

  async create(createUserDto: CreateUserDto) {

    const userFound = await this.userRepository.findByEmail(createUserDto.email);

    if (userFound) {
      throw new ConflictException("Email already exists")
    }

    const newUser = await this.userRepository.create(createUserDto);

    return newUser;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: string) {

    const userFound = await this.userRepository.findOne(id);

    if (!userFound) {
      throw new NotFoundException("User not found");
    }

    return userFound;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    const userFound = await this.userRepository.findOne(id);

    if (!userFound) {
      throw new NotFoundException("User not found");
    }

    return this.userRepository.update(id, updateUserDto);
  }

  async remove(id: string) {

    const userFound = await this.userRepository.findOne(id);

    if (!userFound) {
      throw new NotFoundException("User not found");
    }

    return await this.userRepository.delete(id);
  }
}
