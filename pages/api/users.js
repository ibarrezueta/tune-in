import { getAllUsers } from '../../repository/UserRepository'; // changed from ../../util/mongodb
import { getSession } from 'next-auth/react';
export default async (req, res) => {
    const session = await getSession({req});

    if (session && session.user.name == 'Isaac Barrezueta'){
        const users = await getAllUsers();
        res.json(users);
    }
    res.json({message: 'mind yo business'});
    
};