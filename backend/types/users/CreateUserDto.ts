import type {User} from "../../models/User";

export type CreateUserDto = Omit<User, "id" | "name" | "password_hash" | "created_at"> & {
    full_name:string,
    password: string,
    email: string,
    confirmedPassword: string
};