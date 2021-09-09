import React, {useState} from 'react';
import { useRouter } from 'next/router';
import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
    CssBaseline,
} from '@material-ui/core';
import bcrypt from 'bcryptjs';



export default function FormPropsTextFields() {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const router = useRouter();
    const registerUser = (e) => {
    // TODO: Validate password contains UpperCase, Number and Symbol and is over 8 characters
        e.preventDefault();
        return fetch('/api/createUser', {
            body: JSON.stringify({
                email,
                firstName,
                lastName,
                password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
                emailValidated: false
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(res => {
            res.json().then(body => {
                if (body.isNewEmail) {
                    router.push({
                        pathname: '/email/validate/validate',
                        query: { id: body.confirmationURL },
                    });
                    console.log('TRUE');
                } else {
                    setEmailError(true);
                    console.log('FALSE');
                }
            });
        });
    };

    const emailField = () => {
        return emailError? 
            <TextField
                error
                autoComplete="email"
                name="email"
                fullWidth
                helperText='Account with email already exists'
                required
                type="email"
                label="Email"
                onChange={(event)=>setEmail(event.target.value)}
                value={email}
                variant="outlined"
            /> : 
            <TextField
                autoComplete="email"
                name="email"
                fullWidth
                required
                type="email"
                label="Email"
                onChange={(event)=>setEmail(event.target.value)}
                value={email}
                variant="outlined"
            />;
    };

    return (
        <div style={{ padding: 16, margin: 'auto', maxWidth: 400 }}>
            <CssBaseline />
            <Typography variant="h4" align="center" component="h1" gutterBottom>
        🎸 Sign Up for TuneIn!
            </Typography>
            <form noValidate autoComplete="off">
                <Paper style={{margin: '0 auto', padding: 16 }}>
                    <Grid container alignItems="flex-start" spacing={2}>
                        <Grid item xs={12}>
                            {emailField()}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="firstName"
                                type="text"
                                label="First Name"
                                onChange={(event)=>setFirstName(event.target.value)}
                                value={firstName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required={true}
                                name="lastName"
                                type="text"
                                label="Last Name"
                                onChange={(event)=>setLastName(event.target.value)}
                                value={lastName}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete='new-password'
                                name="password"
                                fullWidth
                                required
                                type="password"
                                label="Password"
                                onChange={(event)=>setPassword(event.target.value)}
                                value={password}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid container justifyContent="center">
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                onClick={registerUser}
                                disabled={email && firstName && lastName && password? false: true}
                            >
                      Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </form>
        </div>
    );
}