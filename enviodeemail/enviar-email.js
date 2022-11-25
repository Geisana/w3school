var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'frgeisana@gmail.com',
        pass: 'umaconfissao'
    }
});

var mailOptions = {
    from: 'frgeisana@gmail.com',
    to: 'amiltondeac@gmail.com',
    subject: 'Estou te enviando um email através do codigo node.js',
    text: 'Se receber me avise!'
};

transporter.sendMail(mailOptions, function (error, info)  {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});