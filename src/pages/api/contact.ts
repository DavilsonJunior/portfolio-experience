import { NextApiRequest, NextApiResponse } from 'next';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import nodemailer from 'nodemailer';

const email = 'revolvejr@gmail.com';

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       api_key: process.env.SENDGRID_API_KEY
//     }
//   })
// );

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, senderMail, content } = req.body;

    if (!senderMail.trim() || !name.trim() || !content.trim()) {
      return res.status(403).send('');
    }

    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `<p><b>Email:</b> ${senderMail}<br /><b>Mensagem: </b> ${content}</p>`,
      replyTo: senderMail
    };

    transporter.sendMail(message);

    return res.send('');
  } catch (err) {
    return res.json({ eror: true, message: err.message });
  }
};
