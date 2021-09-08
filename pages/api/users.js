import {getAllUsers} from '../../repository/UserRepository'; // changed from ../../util/mongodb

export default async (_req, res) => {
    const users = await getAllUsers();
    res.json(users);
};