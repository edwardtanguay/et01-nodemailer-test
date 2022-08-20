import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

var transporter = createTransport({
	service: 'gmail',
	auth: {
		user: 'gmailAccountName',
		pass: process.env.PASSWORD,
	},
});

var mailOptions = {
	from: 'Language Community Site <gmailAccountName@gmail.com>',
	to: 'recipient@xyzcompany.com',
	subject: 'Please confirm your registration',
	html: `
<h1>Please confirm your registration</h1>	
<p>Thank you for signing up with us!</p>
<p>Please click here to confirm your registration: https://edwardtanguay.netlify.app/howtos</p>
`,
};

transporter.sendMail(mailOptions, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});
