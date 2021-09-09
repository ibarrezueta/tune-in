import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { updateEmailValidationStatusForUser, getUserById } from '../../../repository/UserRepository';


const ValidationPage = ({userInfo}) => {

    return (
        <div style={{color: 'gray', maxWidth: 400, margin: '10px auto', padding: '10px 10px', border: '#993399 solid 1px', borderRadius: 10}}>
            <h1 style={{textAlign: 'center', color: '#993399'}}> Email Successfully Verified, {userInfo.firstName} </h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '30px auto'
                }}
            >
                <Image src="/emailConfirmationIcon.png" alt="Email Confirmation Icon" width="204" height="124" />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '10px auto'
                }}
            >
                <Button variant="text"><Link href='/signup'>Continue</Link></Button>
            </div>
            
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
            `}</style>
        </div>
    );
};

ValidationPage.propTypes = {
    userInfo: PropTypes.object
};

export async function getServerSideProps({query}){
    const {id} = query;
    const userInfo = await getUserById(id);
    if (!userInfo.emailValidated) {
        console.log('Only being called here because it\'s not validated yet.');
        updateEmailValidationStatusForUser(id);
    }
    
    return {
        props: {
            userInfo: JSON.parse(JSON.stringify(userInfo)),
        },
    };
}

export default ValidationPage;