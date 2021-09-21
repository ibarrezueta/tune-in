/**
 * Test page to test authenticated api call
 */
import { getSession } from 'next-auth/react';

export default async (req, res) => {
    const session = await getSession({req});
    if (session) {
        res.send({
            content: 'This is my super secret, top secret API. Please guard this',
            secret: 'asdJDFJDljs.ejfuebyEII*v8e9hKNS)v8ehEOSHoneFO'
        });
    } else {
        res.send({error: 'LEAVE'});
    }
};