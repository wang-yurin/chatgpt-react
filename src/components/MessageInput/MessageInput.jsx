/** @jsxImportSource @emotion/react */
import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import messageInputStyles from './MessageInput.styles';

const { TextArea } = Input;

const MessageInput = ({ value, onChange, onSend }) => {
  return (
    <Row align="bottom" css={messageInputStyles}>
      <Col flex={1}>
        <TextArea
          showCount
          allowClear={true}
          onChange={onChange}
          value={value}
        />
      </Col>
      <Button size="large" icon={<SendOutlined />} onClick={onSend}>
        전송
      </Button>
    </Row>
  );
};

export default MessageInput;
