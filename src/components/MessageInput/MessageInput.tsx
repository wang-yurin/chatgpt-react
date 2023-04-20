import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const MessageInput = () => {
  return (
    <Row align="bottom" gutter={16}>
      <Col flex={1}>
        <TextArea showCount allowClear={true} />
      </Col>
      <Button size="large" icon={<SendOutlined />}>
        전송
      </Button>
    </Row>
  );
};

export default MessageInput;
