import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { contentStyle, siderStyle } from './ChatPage.styles';
import { PlusOutlined } from '@ant-design/icons';
import MessageInput from '../../components/MessageInput/MessageInput';
import createChatApi from '../../api/createChat';
import { useQuery } from 'react-query';

const { Content, Footer, Sider } = Layout;

const ChatPage = () => {
  const [userMessage, setUserMessage] = useState<string>('');

  const handleTypingMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(e.target.value);
  };

  const { data } = useQuery('model', createChatApi);
  console.log(data);

  return (
    <Layout>
      <Sider
        style={siderStyle}
        breakpoint="lg"
        collapsedWidth={0}
        theme="light"
      >
        <Button icon={<PlusOutlined />} block size="large">
          새 채팅
        </Button>
      </Sider>
      <Layout>
        <Content style={contentStyle}></Content>
        <Footer>
          <MessageInput
            userMessage={userMessage}
            handleTypingMessage={handleTypingMessage}
          />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default ChatPage;
