import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // 전체적인 기본 스타일 적용
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
