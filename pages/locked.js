/**
 * Test page to show client side authentication
 */
import { useSession, getSession } from 'next-auth/react';
import React from 'react';
export default function Page() {
    const { data: session } = useSession();
    if (session) {
        return (
            <><h1 suppressHydrationWarning={true}>Protected Page</h1><p>You {session.user.name} can view this page because you are signed in.</p></>
        );
    }
    return <p>Access Denied</p>;
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context)
        },
    };
}