import axios from 'axios';

const CHAT_API_URL = 'https://api.openai.com/v1/chat/completions';

const createChatApi = async (requestData: any) => {
  try {
    const response = await axios.post(CHAT_API_URL, requestData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Something went wrong');
    return error;
  }
};

export default createChatApi;
