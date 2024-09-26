import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar'; // 새로 만든 Sidebar 컴포넌트
import MainContent from './components/MainContent'; // 메인 콘텐츠 컴포넌트
import './App.css'; // 전체 레이아웃을 설정하는 스타일

function App() {
    return (
        <div className="app">
            <Header /> {/* 상단 헤더 */}
            <Sidebar /> {/* 왼쪽에 고정된 Sidebar */}
            <div className="content">
                <MainContent /> {/* 오른쪽에 표시되는 메인 콘텐츠 */}
            </div>
        </div>
    );
}

export default App;
