const nodemailer = require('nodemailer');

const credentials = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_USER, 
        pass: process.env.MAIL_PASS  
    }
};

const transporter = nodemailer.createTransport(credentials);

export default async (host, userInfo) => {
    const url = host+'/email/validate/'+userInfo._id;
    const content = 
        {
            subject: 'Welcome To TuneIn!',
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

                    <a style="background-color: #c86464;color: white;padding: 15px 25px;text-decoration: none;"href=${url}>Click Here to Activate</a>
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
  
  
    await transporter.sendMail(email);

};