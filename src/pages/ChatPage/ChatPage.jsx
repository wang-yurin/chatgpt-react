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
import Chat from '../../components/Chat/Chat';
import usePostMessage from '../../hooks/usePostMessage';

const { Content, Footer, Sider } = Layout;

const ChatPage = () => {
  const [message, setMessage] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const postMessage = usePostMessage();

  const handleTypingMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    postMessage({ userMessage, message, setMessage });
    setUserMessage('');
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
          {message &&
            message.map((message, index) => (
              <Chat message={message} key={index} />
            ))}
        </Content>
        <MessageInput
          message={message}
          value={userMessage}
          handleTypingMessage={handleTypingMessage}
          handleSendMessage={handleSendMessage}
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
