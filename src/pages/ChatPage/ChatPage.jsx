import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import {
  contentStyles,
  footerStyles,
  layoutStyles,
  siderStyles,
} from './ChatPage.styles';
import { PlusOutlined } from '@ant-design/icons';
import MessageInput from '../../components/MessageInput/MessageInput';
import createChatApi from '../../api/createChat';
import { useMutation } from 'react-query';
import Chat from '../../components/Chat/Chat';

const { Content, Footer, Sider } = Layout;

const ChatPage = () => {
  const { mutateAsync } = useMutation(createChatApi);

  const [message, setMessage] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleTypingMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    const newMessage = { role: 'user', content: userMessage };
    const newMessageList = [...message, newMessage];

    setMessage(newMessageList);
    setUserMessage('');

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    };

    const responseData = await mutateAsync(requestData);

    const newSystemMessage = responseData?.choices[0].message;
    const newSystemMessageList = [...newMessageList, newSystemMessage];

    setMessage(newSystemMessageList);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        style={siderStyles}
        breakpoint="lg"
        collapsedWidth={0}
        theme="light"
      >
        <Button icon={<PlusOutlined />} block size="large">
          새 채팅
        </Button>
      </Sider>
      <Layout style={layoutStyles}>
        <Content style={contentStyles}>
          {message.map((message, index) => (
            <Chat message={message} key={index} />
          ))}
        </Content>
        <MessageInput
          message={message}
          value={userMessage}
          onChange={handleTypingMessage}
          onSend={handleSendMessage}
        />
        <Footer style={footerStyles}>
          <a href="https://github.com/wang-yurin" target="blank">
            GitHub
          </a>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default ChatPage;
