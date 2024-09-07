import React from 'react';

const ChatPage = () => {
    const chats = ['채팅방1', '채팅방2', '채팅방3']; // API에서 가져올 데이터 대체

    return (
        <div>
            <h1>채팅 목록</h1>
            <ul>
                {chats.map((chat, index) => (
                    <li key={index}>{chat}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChatPage;