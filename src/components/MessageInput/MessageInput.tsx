import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useMutation } from 'react-query';
import createChatApi from '../../api/createChat';

const { TextArea } = Input;

interface Props {
  userMessage: string;
  handleTypingMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageInput = ({ userMessage, handleTypingMessage }: Props) => {
  const { mutate } = useMutation(createChatApi);

  const handleSendMessage = () => {
    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    };

    mutate(requestData);
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
