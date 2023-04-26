import React from 'react';
import { Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Spinner = () => {
  const spinIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <Space direction="vertical" align="center" style={{ marginBottom: 10 }}>
      <Spin tip="Loading..." indicator={spinIcon} />
    </Space>
  );
};

export default Spinner;
