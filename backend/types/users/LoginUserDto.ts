import type {User} from "../../models/User";
export type LoginUserDto = Omit<User, "id" | "passwordHash" | "created_at"> & {
    password?: string,
    email?: string
};