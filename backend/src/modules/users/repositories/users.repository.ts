import { User } from "@prisma/client";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

export abstract class UsersRepository {
    abstract create(data: CreateUserDto): Promise<User>;
    abstract findAll(): Promise<User[]>;
    abstract findOne(userId: string): Promise<User>;
    abstract findByEmail(email: string): Promise<User>;
    abstract update(userId: string, data: UpdateUserDto): Promise<User>;
    abstract delete(userId: string): Promise<void>;
}