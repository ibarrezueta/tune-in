const nodemailer = require('nodemailer');

// The credentials for the email account you want to send mail from. 
const credentials = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
    // These environment variables will be pulled from the .env file
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASS  
    }
};

// Getting Nodemailer all setup with the credentials for when the 'sendEmail()'
// function is called.
const transporter = nodemailer.createTransport(credentials);

// exporting an 'async' function here allows 'await' to be used
// as the return value of this function.
export default async (host, userInfo) => {
    const url = host+'/api/email/validate/'+userInfo._id
    const content = 
        {
            subject: 'React Confirm Email',
            html: `
                <div style="color:gray;max-width:400px;margin:10px auto;padding:10px 10px;border:rgb(200,100,100) solid 1px; border-radius: 10">
                    <h1 style="text-align:center;color:rgb(200, 100, 100)"> Welcome Aboard ${userInfo.firstName} </h1> 
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

                    <button><a href=${url}>Click Here to Activate</a></button>
                    <p>Looking forward to seeing you on TuneIn!</p>
                    <p> 🎉 Cheers,</p>
                    <p> TuneIn Team</p>
                </div>
            `,      
            text: 'Copy and paste this link: facebook.com'
        };
    console.log(process.env.MAIL_USER);
    console.log(process.env.MAIL_PASS);
      
    // The from and to addresses for the email that is about to be sent.
    const contacts = {
        from: process.env.MAIL_USER,
        to: userInfo.email
    };
  
    // Combining the content and contacts into a single object that can
    // be passed to Nodemailer.
    const email = Object.assign({}, content, contacts);
  
    // This file is imported into the controller as 'sendEmail'. Because 
    // 'transporter.sendMail()' below returns a promise we can write code like this
    // in the contoller when we are using the sendEmail() function.
    //
    //  sendEmail()
    //   .then(() => doSomethingElse())
    // 
    // If you are running into errors getting Nodemailer working, wrap the following 
    // line in a try/catch. Most likely is not loading the credentials properly in 
    // the .env file or failing to allow unsafe apps in your gmail settings.
    await transporter.sendMail(email);

};