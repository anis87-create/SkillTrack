import type {User} from "../../models/User";
import type {CreateUserDto} from "../../types/users/CreateUserDto";
import type {LoginUserDto} from "../../types/users/LoginUserDto";

export interface IUserRepository {
    register(userForm: CreateUserDto): Promise<User>,
    findUserById(id: number): Promise<User>,
    findUserByEmail(email: string): Promise<User>
    findAll(): Promise<User[]>
}