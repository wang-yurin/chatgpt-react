/** @jsxImportSource @emotion/react */
import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { messageInputStyles, textareaStyles } from './MessageInput.styles';

const { TextArea } = Input;

const MessageInput = ({ value, handleTypingMessage, handleSendMessage }) => {
  return (
    <Row align="bottom" css={messageInputStyles}>
      <Col flex={1}>
        <TextArea
          showCount
          allowClear={true}
          onChange={handleTypingMessage}
          value={value}
          autoSize={{ minRows: 1, maxRows: 10 }}
          bordered={false}
          style={textareaStyles}
          onPressEnter={handleSendMessage}
          placeholder="메시지를 입력하세요."
        />
      </Col>
      <Button size="large" icon={<SendOutlined />} onClick={handleSendMessage}>
        전송
      </Button>
    </Row>
  );
};

export default MessageInput;
