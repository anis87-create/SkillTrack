import UserRepository = require("../repositories/UserRepository");
import type {CreateUserDto} from "../types/users/CreateUserDto";

class UserService {
    constructor(private userRepository: UserRepository){}

    async findAll() {
        return this.userRepository.findAll();
    }
    async register(form: CreateUserDto){
        const user =  await this.userRepository.register(form);
        return user;
    }
    async findById(id: number){
        return this.userRepository.findUserById(id);
    }
    async findByEmail(email: string){
        return this.userRepository.findUserByEmail(email);
    }
}

export = UserService;