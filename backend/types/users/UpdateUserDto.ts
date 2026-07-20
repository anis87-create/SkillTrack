import type { User } from "../../models/User";

export type CreateUserDto = Omit<User, "id" | "passwordHash" | "created_at"> & {
    password?: string,
    email?: string
};