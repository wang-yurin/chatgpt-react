const setMessagesHistory = (message: any) => {
  return localStorage.setItem('messages', JSON.stringify(message));
};

const getMessagesHistory = () => {
  return localStorage.getItem('messages');
};

export { setMessagesHistory, getMessagesHistory };
