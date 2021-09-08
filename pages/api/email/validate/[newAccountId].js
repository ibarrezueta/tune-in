import {getUserById} from '../../../../repository/UserRepository';

export default async function handler(req, res) {
    const { newAccountId } = req.query;
    const emailData = await getUserById(newAccountId);
    res.json(emailData);
}