import axios from 'axios';

export const sendContactMail = async (
  name: string,
  senderMail: string,
  content: string
) => {
  const data = {
    name,
    senderMail,
    content
  };

  try {
    return await axios.post('/api/contact', data);
    console.log('teste');
  } catch (error) {
    return error;
  }
};
