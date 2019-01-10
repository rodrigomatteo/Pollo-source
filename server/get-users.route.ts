import {Request, Response} from 'express';
import {USERS} from '../src/db-data';


export function getAllUsers(req: Request, res: Response) {
    res.status(200).json(Object.values(USERS));
}


export function getUserById(req: Request, res: Response) {
    const userId = req.params['id'];
    const users: any = Object.values(USERS);
    const user = users.find(user => user.id == userId);

    res.status(200).json(user);
}
