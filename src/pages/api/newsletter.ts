import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, email } = req.body;

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      merge_fields: {
        FNAME: firstName,
      },
      status: 'subscribed',
    });

    return res.status(201).json({ error: '' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};
