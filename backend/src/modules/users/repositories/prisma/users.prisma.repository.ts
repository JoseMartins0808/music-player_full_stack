import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../users.repository";
import { CreateUserDto } from "../../dto/create-user.dto";
import { PrismaService } from "src/database/prisma.service";
import { User } from "../../entities/user.entity";
import { UpdateUserDto } from "../../dto/update-user.dto";

@Injectable()
export class UsersPrismaRepository implements UsersRepository {

    constructor(private prisma: PrismaService) { }

    async create(data: CreateUserDto): Promise<User> {

        const newUser = new User();

        Object.assign(newUser, {
            ...data
        });

        const saveUser = await this.prisma.user.create({
            data: { ...newUser }
        });

        return saveUser;
    }

    async findAll(): Promise<User[]> {

        const allUsers = await this.prisma.user.findMany();

        return allUsers;
    }

    async findOne(userId: string): Promise<User> {

        const userFound = await this.prisma.user.findUnique({
            where: { id: userId }
        });

        return userFound;
    }

    async update(userId: string, data: UpdateUserDto): Promise<User> {

        const updateUser = await this.prisma.user.update({
            where: { id: userId },
            data: { ...data }
        });

        return updateUser;
    }

    async delete(userId: string): Promise<void> {

        await this.prisma.user.delete({
            where: { id: userId }
        });
    }
}