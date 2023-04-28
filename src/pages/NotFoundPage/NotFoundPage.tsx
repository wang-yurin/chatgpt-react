import React from 'react';
import { Button, Result } from 'antd';

const NotFoundPage = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Result
      status={404}
      title="404 😥"
      subTitle="유효하지 않은 페이지입니다."
      extra={
        <Button type="primary" onClick={handleGoBack}>
          돌아가기
        </Button>
      }
    />
  );
};

export default NotFoundPage;
