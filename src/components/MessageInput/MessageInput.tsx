import React, { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import createChatApi from '../../api/createChat';

const { TextArea } = Input;

const MessageInput = () => {
  const [userMessage, setUserMessage] = useState<string>('');

  const handleTypingMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    };

    createChatApi(requestData);
  };

  return (
    <Row align="bottom" gutter={16}>
      <Col flex={1}>
        <TextArea
          showCount
          allowClear={true}
          onChange={handleTypingMessage}
          value={userMessage}
        />
      </Col>
      <Button size="large" icon={<SendOutlined />} onClick={handleSendMessage}>
        전송
      </Button>
    </Row>
  );
};

export default MessageInput;
