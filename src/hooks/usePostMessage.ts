import { useMutation } from 'react-query';
import createChatApi from '../api/createChat';

const usePostMessage = () => {
  const { mutate } = useMutation(createChatApi);

  const postMessage = async ({
    message,
    userMessage,
    setMessage,
    setIsLoading,
  }: any) => {
    const newMessage = { role: 'user', content: userMessage };
    const newMessageList = [...message, newMessage];

    setMessage(newMessageList);
    setIsLoading(true);

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    };

    mutate(requestData, {
      onSuccess: (responseData) => {
        const newSystemMessage = responseData?.choices[0].message;
        const newSystemMessageList = [...newMessageList, newSystemMessage];

        setMessage(newSystemMessageList);
        setIsLoading(false);
      },
      onError: (error) => {
        console.error('Error:', error);
        setIsLoading(false);
      },
    });
  };
  return { postMessage };
};

export default usePostMessage;
