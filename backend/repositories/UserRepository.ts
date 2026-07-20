import type { User } from "../models/User";
import type { CreateUserDto } from "../types/users/CreateUserDto";
import type { LoginUserDto } from "../types/users/LoginUserDto";
import type {IUserRepository} from "./interfaces/IUserRepository";
import type {Pool} from 'pg';
const { query } = require('../config/db');
class UserRepository implements IUserRepository{
    constructor(pool: Pool){}
    async register(userForm: CreateUserDto): Promise<User> {
        const INSERT_QUERY = 'INSERT INTO users(full_name,email, password_hash) VALUES($1,$2,$3) RETURNING *';
        const res = await query(INSERT_QUERY, [userForm.full_name, userForm.email, userForm.password]);
        return res.rows[0];
    }
    async findUserById(id: number): Promise<User> {
        const GET_QUERY = 'SELECT id, email, full_name AS name, password_hash, created_at FROM users WHERE id=$1';
        const res = await query(GET_QUERY, [id]);
        return res.rows[0];
    }
    async findUserByEmail(email: string): Promise<User> {
        const GET_QUERY = 'SELECT id, email, full_name AS name, password_hash, created_at FROM users WHERE email=$1';
        const res = await query(GET_QUERY, [email]);
        return res.rows[0];
    }
    async findAll(): Promise<User[]> {
        const GET_QUERY = 'SELECT id,email, full_name FROM users';
        const res = await query(GET_QUERY);
        return res.rows[0];
    }

}


export = UserRepository;