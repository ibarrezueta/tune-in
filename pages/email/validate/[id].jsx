import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getUserById } from '../../../repository/UserRepository';
import Image from 'next/image';
import Link from 'next/link'

const ValidationPage = ({userInfo}) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div style={{color: 'gray', maxWidth: 400, margin: '10px auto', padding: '10px 10px', border: '#993399 solid 1px', borderRadius: 10}}>
            <h1 style={{textAlign: 'center', color: '#993399'}}> Great! Now verify your email, {userInfo.firstName} </h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '30px auto'
                }}
            >
                <Image src="/emailConfirmationIcon.png" alt="Email Confirmation Icon" width="204" height="124" />
            </div>
            <p>
                Check your inbox at <b>{userInfo.email}</b> and click the verification link inside to complete your registration.
                This link will expire shortly, so verify soon!
            </p>
            <p>
                <b>Didn&apos;t see an email?</b> Check your spam folder.
            </p>
            <p>
                Link Expired? <Link href={'/api/email/validate/' + id}><a>Resend verification email</a></Link>
            </p>
            <style jsx global>{`
                body {
                    height: 100%;
                    background: linear-gradient(90deg, #B9B6ff 25%, #FEFEFE 25%);
                }
                a {
                    color: purple
                }

                h1 {
                    font-size: 1.3rem;
                }
                img {
                    margin: 30px auto;
                }
                p {
                    line-height: 1.75;
                }
            `}</style>
        </div>
    );
};

ValidationPage.propTypes = {
    userInfo: PropTypes.object
};

export async function getServerSideProps({query}) {
    const {id} = query;
    const emailData = await getUserById(id);
    return {
        props: {
            userInfo: JSON.parse(JSON.stringify(emailData)),
        },
    };
}
export default ValidationPage;