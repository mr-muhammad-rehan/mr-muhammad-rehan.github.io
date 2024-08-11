import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, SenderEmail, message } = req.body;

    if (!message || !name || !SenderEmail) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    try {
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'mrmuhammadrehan65@gmail.com',
        subject: `${name} From Contact Form.`,
        reply_to: `${SenderEmail}`,
        text: `sender email: ${SenderEmail} \n ${message}`,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}