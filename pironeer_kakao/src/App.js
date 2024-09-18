import React, { useState } from 'react'; // useState 추가
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from 'react-router-dom';
import FriendsPage from './pages/FriendsPage';
import ChatPage from './pages/ChatPage';
import styled from 'styled-components';
import {
    FaUserFriends,
    FaComments,
    FaSearch,
    FaMusic,
    FaCommentDots,
    FaShoppingCart,
    FaEllipsisH,
    FaCog
} from 'react-icons/fa';
import OpenChatPage from "./pages/OpenChatPage";
import ShopPage from "./pages/ShopPage";
import MorePage from "./pages/MorePage";

const App = () => {
    // unreadMessages 상태 추가
    const [unreadMessages, setUnreadMessages] = useState(226); // 예시로 226개의 안 읽은 메시지

    return (
        <Router>
            <Container>
                <Header>
                    <HeaderContent/>
                    <IconsWrapper>
                        <FaSearch size={20} style={iconStyle}/>
                        <FaUserFriends size={20} style={iconStyle}/>
                        <FaMusic size={20} style={iconStyle}/>
                        <FaCog size={20} style={iconStyle}/>
                    </IconsWrapper>
                </Header>

                <Routes>
                    <Route path="/" element={<Navigate to="/friends"/>}/>
                    <Route path="/friends" element={<FriendsPage/>}/>
                    <Route path="/chat" element={<ChatPage/>}/>
                    <Route path="/openchat" element={<OpenChatPage/>}/>
                    <Route path="/shopping" element={<ShopPage/>}/>
                    <Route path="/more" element={<MorePage/>}/>
                </Routes>

                {/* unreadMessages 상태를 Footer에 전달 */}
                <Footer unreadMessages={unreadMessages}/>
            </Container>
        </Router>
    );
};

const HeaderContent = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    let text = '';
    if (currentPath === '/friends') {
        text = '친구';
    } else if (currentPath === '/chat') {
        text = '채팅';
    } else if (currentPath === '/more') {
        text = '더보기';
    } else if (currentPath === '/openchat') {
        text = '오픈채팅';
    } else if (currentPath === '/shopping') {
        text = '쇼핑';
    }

    return <HeaderText>{text}</HeaderText>;
};

// Footer 컴포넌트에 unreadMessages를 props로 받도록 수정
const Footer = ({ unreadMessages }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <FooterContainer>
            <FooterLink to="/friends" isActive={currentPath === '/friends'}>
                <FaUserFriends size={24}/>
                친구
            </FooterLink>
            <FooterLink to="/chat" isActive={currentPath === '/chat'}>
                <IconContainer>
                    <FaComments size={24}/>
                    {/* unreadMessages 값이 0보다 크면 Badge 보여줌 */}
                    {unreadMessages > 0 && <Badge>{unreadMessages}</Badge>}
                </IconContainer>
                채팅
            </FooterLink>

            <FooterLink to="/openchat" isActive={currentPath === '/openchat'}>
                <FaCommentDots size={24}/>
                오픈채팅
            </FooterLink>
            <FooterLink to="/shopping" isActive={currentPath === '/shopping'}>
                <FaShoppingCart size={24}/>
                쇼핑
            </FooterLink>
            <FooterLink to="/more" isActive={currentPath === '/more'}>
                <FaEllipsisH size={24}/>
                더보기
            </FooterLink>
        </FooterContainer>
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

const IconContainer = styled.div`
    position: relative;
`;

const Badge = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: bold;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    width: 100%;
`;

const IconsWrapper = styled.div`
    display: flex;
    gap: 30px;
    margin-right: 17px;
`;

const HeaderText = styled.div`
    margin-left: 15px;
    font-size: 35px;
    font-weight: bold;
`;

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #ddd;
    width: 100%;
    background-color: #fff;
`;

const FooterLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${({isActive}) => (isActive ? 'black' : '#888')};
    font-size: 12px;

    svg {
        margin-bottom: 4px;
        color: ${({isActive}) => (isActive ? 'black' : '#888')};
    }
`;

const iconStyle = {
    cursor: 'pointer'
};

export default App;