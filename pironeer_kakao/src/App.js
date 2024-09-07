
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ChatPage from './pages/ChatPage';
import styled from 'styled-components'; // styled-components 라이브러리 import

// 아이콘은 예시입니다. 적절한 아이콘을 사용하세요.
import {FaSearch, FaUserFriends, FaMusic} from 'react-icons/fa';

const App = () => {
    return (
        <Router>
            {/* 전체 컨테이너 */}
            <Container>
                {/* 헤더 */}
                <Header>
                    <FaSearch size={20} style={iconStyle}/>
                    <FaUserFriends size={20} style={iconStyle}/>
                    <FaMusic size={20} style={iconStyle}/>
                </Header>

                {/* 네비게이션 메뉴 */}


                {/* 페이지 내용 */}
                <Routes>
                    <Route path="/friends" element={<FriendsPage/>}/>
                    <Route path="/chat" element={<ChatPage/>}/>
                </Routes>

                {/* 푸터 */}
                <Footer>
                    <Link to="/friends">친구</Link>
                    <Link to="/chat">채팅</Link>
                </Footer>
            </Container>
        </Router>
    );
};

// 스타일 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 480px;
    height: 100vh;
    border: solid black;
    overflow: hidden;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    width: 100%;
`;

const Nav = styled.nav`
    text-align: center;
    margin: 20px 0;
`;

const ulStyle = {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '20px'
};

const liStyle = {
    margin: '0 10px'
};

const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ddd;
    width: 100%;
    background-color: #fff;
`;

const iconStyle = {
    cursor: 'pointer'
};

export default App;
