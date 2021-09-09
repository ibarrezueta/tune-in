import * as UserRepository from '../../repository/UserRepository';
import sendEmail from './email/send';


export default async function handler(req, res) {
    // Check that email isn't already used
    console.log("Trying this...", req.headers.host)
    isNewEmail(req.body.email).then(isNewEmail => {
        if (isNewEmail) {
            saveUser(req.body).then(response => {
                try {
                    const host = req.headers.host;
                    sendEmail(host, response.ops[0]);
                } catch (error) {
                    console.log('This is the error: ', error);
                }
                res.status(200).json({
                    isNewEmail: true,
                    confirmationURL: response.ops[0]._id
                });
            });
        } else {
            res.status(200).json({
                isNewEmail: false
            });
        }
    });
    
    // Send out an email to the user confirming that they created an account...
    // Send out a confirmation email or something with a password
    // See if we can set up 2fa :D
    // res.status(200).json(
    //   req.body // after the above stuff is set up, this will just send a status 200 code
    // )
}

const saveUser = async (userInfo) => {
    return UserRepository.saveUserInfo(userInfo);
};

const isNewEmail = async (email) => {
    const users = await UserRepository.getUsersByEmail(email); // change this to a query that just checks existence  
    return Array.isArray(users) && !users.length;
};

// eslint-disable-next-line no-unused-vars
const confirmEmail = (req, res) => {
    // Here we validate that they enter the correct code we sent them
    // If the code is correct
    // Store this data in database
    // Figure out which database I want to use.. keep fleshing out the data
    // Set up the db on local and then set up the query I'll need here
    res.status(200).json({'isValid': true});
    // If the code is incorrect
    // Have them re-enter the form.
    res.status(200).json({'isValid': false});
};