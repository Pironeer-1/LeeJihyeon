import React from 'react';
import styled from 'styled-components';

const ChatPage = () => {
    // 데이터
    const chats = [
        {
            name: '피로22최승호',
            message: '사진을 보냈습니다.',
            time: '오후 2:55',
            unread: 0,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjhfMTA4%2FMDAxNjgwMDAyNTc0MjUz.0xCsmv17XQB15qmTrEIsYNddkfETbnesM8OVTwlFY6cg.8fcaYp-HP7EeI7rbt5g8xCL8wv4WjOw0nDMOKhu8sekg.PNG.npay1%2F20230326%25A3%25DF202548%25A3%25DF390.png&type=a340"
        },
        {
            name: '김연아',
            message: '찜닭 먹으러 갈 거다',
            time: '오후 3:08',
            unread: 4,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MzFfNTUg%2FMDAxNzIyMzU4MjQ0MzMw.PJlBy3IpFdZUApOizbxhTIGP5P2h_Mc5x8vb3uK3UyUg.bzOpTc1oxZbau6znjRHRFWerF3WtdgDd0Z3W1hx6EAMg.JPEG%2FIMG_3686.jpg&type=a340"
        },
        {
            name: '김주연',
            message: 'https://github.com/Pironeer-1/practice1',
            time: '오후 2:51',
            unread: 0,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjdfMjgx%2FMDAxNjQwNTU3NDY1NTk0.qG2Ly1w-ci-rSGfkqlVkrZFoj7hRmx_q9XRYVIMC9Kcg.V15aVxEX5IpvAdgvAymjcuZ7xLaz_VKP7CptCQlPqpQg.JPEG.gmlwjd5363%2FFB%25A3%25DFIMG%25A3%25DF1640557112620.jpg&type=a340"
        },
        {
            name: '누구세요',
            message: '저 모르세요?',
            time: '오후 3:26',
            unread: 0,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMjcw%2FMDAxNjkyMzk0MjM0MTc5.W4CyJg5XnH7Oo0xtGFAc-LkzWwa75m-PyG2x8lbpssgg.aAZdBp2nYD5JyeUNvm0jiPhWVLPh7FrKYfIATos8dEwg.PNG.jjungaang%2Fpfp%25A3%25DFlvory%25A3%25DFuzubaong.png&type=a340"
        },
        {
            name: '토순이',
            message: '토끼토끼',
            time: '오후 3:17',
            unread: 0,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDVfMTIy%2FMDAxNjIwMTQ0MjQ1ODcw.AKNZKn1trhLocK2YFhLPi7A1O5J9sEQnBb0DmydaS1Mg.9EUe2zGM1W5gk4qjJ8W0WZ0mhfnCBnpYQQKK70hk9ncg.JPEG.06heyjin06%2F20210219_220700.jpg&type=a340"
        },
        {
            name: '카카오톡',
            message: '[기기 로그인 알림]',
            time: '오후 3:16',
            unread: 6,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMDlfMjIg%2FMDAxNTc4NTQ0MTMwODI3.W5pMwGQb22xW8hYGIBgF4Y2DheotJCj0dc_MZLiVhGQg.4I9ekROurF7sjus0WC1GbV-B4N_Qtrm3vIdaFoolBYsg.PNG.kmj070444%2F%25C4%25AB%25C4%25AB%25BF%25C0%25C5%25E5_%25C5%25F5%25B8%25ED_png.png&type=a340"
        },
        {
            name: '피로22이송민',
            message: '10,000원을 받았어요...',
            time: '오후 2:08',
            unread: 0,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTFfNTUg%2FMDAxNjk0NDM1NTAyNjMy.S0QIqq6oaTRLCte3hwbHK-Y3NQMH7cbYe979gz4RMz8g.Em-Qi7h_Mp-AdWScwYhhVexEeu-tjeZXmg7I1vEGMvgg.JPEG.alstj971020%2FIMG_0412.JPG&type=a340"
        },
        {
            name: '🩸일요일 서울역 스터디🩸',
            message: '감사당ㅋㅋ!',
            time: '오후 2:00',
            unread: 7,
            avatar: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fus.123rf.com%2F450wm%2Ficonhome%2Ficonhome2407%2Ficonhome240706013%2F231970356-lcd-monitor-vector-icon-isolated-on-white-background.jpg%3Fver%3D6&type=a340'
        },
        {
            name: '최은재',
            message: '맛집가자',
            time: '오후 4:00',
            unread: 1,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDNfMjk3%2FMDAxNjc3ODQ5NzcwNzcz.4zZlxycbdzEHBDIUNk-93Z69K8yPzf2K5wLNwMULFrYg.IPuEEwq2dGaEGewSchfcpPNo4_DGt0P50LSTB65Ne4og.JPEG.jieon2992%2FIMG_7929.JPG&type=a340"
        },
        {
            name: '손흥민',
            message: '나 오늘도 골 넣었어~',
            time: '오후 4:00',
            unread: 2,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F413%2F2024%2F05%2F20%2F0000177149_001_20240520135901373.jpg&type=a340"
        },
        {
            name: '피로22김민수',
            message: '회 먹으실?',
            time: '오후 4:00',
            unread: 3,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjlfODMg%2FMDAxNjAxMzgzMDc3NDc2.TsSYhqyjc6VYqaJ5uCnrgODCvtF9YeD_odI2NZ0wzSEg.XmBCMcl2-kSMLpojVhPShbq952F4dkGwNNRLHXo2vv8g.JPEG.pompurin12%2FIMG_3444.JPG&type=sc960_832"
        },
        {
            name: 'ㄱ.엄마',
            message: '일찍 일찍 다니렴',
            time: '오후 4:00',
            unread: 3,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160403_71%2Fwkao9489_1459683394411KJHiB_JPEG%2FNaverBlog_20160403_203633_03.jpg&type=a340"
        },
        {
            name: '피로22안시환',
            message: '아아요~~~~~~~~~',
            time: '오후 4:00',
            unread: 3,
            avatar: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTlfNzgg%2FMDAxNjYwODkwODM4OTc4.OxDyaMK9Q-bnj4V_B2ac0BdHtdYMzjfcsp3aSMWc3r4g.YkkYCsBugVzUzHDl1JKprPoWaix1xfQwNOqabMHpuHsg.JPEG.bottlegod1%2Fa6b4e6ea7c7e24258e7c4b5433af1fef.jpg&type=a340"
        },
    ];

    return (
        <ChatList>
            {chats.map((chat, index) => (
                <ChatItem key={index}>
                    <Avatar src={chat.avatar} alt={`${chat.name}의 아바타`}/>
                    <ChatInfo>
                        <ChatName>{chat.name}</ChatName>
                        <ChatMessage>{chat.message}</ChatMessage>
                    </ChatInfo>
                    <ChatDetails>
                        <Time>{chat.time}</Time>
                        {chat.unread > 0 && <UnreadBadge>{chat.unread}</UnreadBadge>}
                    </ChatDetails>
                </ChatItem>
            ))}
        </ChatList>
    );
};

export default ChatPage;

// 스타일
const ChatList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    overflow-y: auto;
    max-height: calc(100vh - 120px);

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f0f0f0;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #c0c0c0;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #a0a0a0;
    }
`;

const ChatItem = styled.li`
    display: flex;
    align-items: center;
    padding: 20px 16px;
    border-bottom: 1px solid #ddd;
`;

const Avatar = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 20px;
    background-color: #ddd;
    margin-right: 16px;
`;

const ChatInfo = styled.div`
    flex-grow: 1;
`;

const ChatName = styled.div`
    font-weight: 400;
    font-size: 15px;
`;

const ChatMessage = styled.div`
    font-size: 13px;
    color: #888;
`;

const ChatDetails = styled.div`
    text-align: right;
`;

const Time = styled.div`
    font-size: 12px;
    color: #888;
`;

const UnreadBadge = styled.div`
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-left: 40px;
`;
