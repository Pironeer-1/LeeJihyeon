import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ChatPage from './pages/ChatPage';
import styled from 'styled-components';

import {FaSearch, FaUserFriends, FaMusic} from 'react-icons/fa';

const App = () => {
    return (
        <Router>
            <Container>
                <Header>
                    <FaSearch size={20} style={iconStyle}/>
                    <FaUserFriends size={20} style={iconStyle}/>
                    <FaMusic size={20} style={iconStyle}/>
                </Header>

                <Content>
                    <Routes>
                        <Route path="/" element={<Navigate to="/friends" replace />} />
                        <Route path="/friends" element={<FriendsPage/>}/>
                        <Route path="/chat" element={<ChatPage/>}/>
                    </Routes>
                </Content>

                <Footer>
                    <FooterLink to="/friends">친구</FooterLink>
                    <FooterLink to="/chat">채팅</FooterLink>
                </Footer>
            </Container>
        </Router>
    );
};

// 스타일 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
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

const Content = styled.div`
    flex: 1;
    overflow-y: auto;
`;

const Footer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ddd;
    width: 100%;
    background-color: #fff;
`;

const FooterLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 14px;
`;

const iconStyle = {
    cursor: 'pointer'
};

export default App;