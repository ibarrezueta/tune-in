import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { getUserById } from '../../../repository/UserRepository';


const ValidationPage = ({userInfo}) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div style={{color: 'gray', maxWidth: 400, margin: '10px auto', padding: '10px 10px', border: 'rgb(200,100,100) solid 1px', borderRadius: 10}}>
            <h1 style={{textAlign: 'center', color: 'rgb(200, 100, 100)'}}> Welcome Aboard {userInfo.firstName} </h1> 
            <p>
                Happy to see you here.
                You have joined a community with likeminded fold and extensive resources.
            </p>
            <p>
                There are many people like you who are looking for other musicians and spaces here on TuneIn. Ping us if you ever need anything.
            </p>
            <p>
                Next step is super easy - just click the buttom below - please note the button only remains magic for 30 minutes.
            </p>

            <button><a href={'/api/email/validate/'+id}>Click Here to Activate</a></button>
            <p>Looking forward to seeing you on TuneIn!</p>
            <p> 🎉 Cheers,</p>
            <p> TuneIn Team</p>
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