/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'rgb(100,100,100)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function ButtonAppBar() {
    const classes = useStyles();
    const { data: session, loading } = useSession();

    return (
        <div className={classes.root}>
            <AppBar style={{ background: 'rgb(200,100,100)' }} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                      TuneIn
                    </Typography>
                    {loading && <p>Loading..</p>}
                    {!session && <Button color="inherit" variant='outlined' onClick={()=>signIn('google', { callbackUrl: 'https://localhost:3000/' })}>Log In</Button>}
                    {session && <Button color="inherit" variant='outlined' onClick={()=>signOut()}>Log Out</Button>}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default function Home() {
    const { data: session } = useSession();
    return (<>
        <ButtonAppBar/>
        <div className="container">
            <Head>
                <title>TuneIn Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{width:'100vw', height:'auto'}} display='block'>
                <Image 
                    alt='Photo of an empty music studio'
                    src='/musicStudio.jpg'
                    height='400'
                    width='800'
                    layout='responsive'
                />
            </div>
            
            <main>
                <h1 className="title">
          Welcome to TuneIn {session?.user ? session.user.name: ''}!
                </h1>

                

                <p className="description">
          Get started by <code>signing up</code>
                </p>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  TuneIn
                </a>
            </footer>

            <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div></>
    );
}
