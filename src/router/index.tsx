import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ChatHistoryPage from '../pages/ChatHistoryPage/ChatHistoryPage';
import ChatPage from '../pages/ChatPage/ChatPage';
import MainPage from '../pages/MainPage/MainPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:id" element={<ChatHistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
