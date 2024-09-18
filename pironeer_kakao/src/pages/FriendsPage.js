import React, {useState} from 'react';
import styled from 'styled-components';
import {FaChevronDown, FaChevronUp} from 'react-icons/fa';

// Styled components
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
    }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
`;

const ProfileImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    margin-right: 15px;
`;

const ProfileName = styled.span`
    font-weight: 400;
    font-size: 15px;
`;

const Section = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;

const SectionTitle = styled.h2`
    font-size: 14px;
    color: #888;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 0 20px;
`;

const SectionTitleText = styled.span`
    font-weight: 500;
    display: flex;
    align-items: center;
`;

const CountBadge = styled.span`
    font-weight: 400;
    border-radius: 10px;
    padding: 2px 6px;
    font-size: 12px;
`;

const SectionContent = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    width: 100%;
`;

const HorizontalScrollList = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 0 20px 10px;
    width: 100%;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer 10+ */

    &::-webkit-scrollbar {
        display: none; /* WebKit */
    }
`;

const UpdatedProfileItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    flex-shrink: 0;
`;

const ItemImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 20px;
    margin-bottom: 5px;
`;

const ItemName = styled.span`
    font-size: 12px;
    text-align: center;
`;

const FriendsList = styled.ul`
    list-style-type: none;
    padding: 0 20px;
    width: 100%;
`;

const FriendItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const FriendImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 15px;
    margin-right: 10px;
`;

const FriendName = styled.span`
    font-weight: 400;
    font-size: 15px;
`;

const FriendsPage = () => {
    const [isProfileListOpen, setIsProfileListOpen] = useState(true);
    const [isFriendsListOpen, setIsFriendsListOpen] = useState(true);

    const toggleProfileList = () => setIsProfileListOpen(!isProfileListOpen);
    const toggleFriendsList = () => setIsFriendsListOpen(!isFriendsListOpen);

    const truncateName = (name) => {
        return name.length > 5 ? name.slice(0, 5) + '...' : name;
    };

    // 샘플 데이터
    const updatedProfiles = [
        {
            id: 1,
            name: "피로22최승호",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjhfMTA4%2FMDAxNjgwMDAyNTc0MjUz.0xCsmv17XQB15qmTrEIsYNddkfETbnesM8OVTwlFY6cg.8fcaYp-HP7EeI7rbt5g8xCL8wv4WjOw0nDMOKhu8sekg.PNG.npay1%2F20230326%25A3%25DF202548%25A3%25DF390.png&type=a340"
        },
        {
            id: 2,
            name: "김연아",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MzFfNTUg%2FMDAxNzIyMzU4MjQ0MzMw.PJlBy3IpFdZUApOizbxhTIGP5P2h_Mc5x8vb3uK3UyUg.bzOpTc1oxZbau6znjRHRFWerF3WtdgDd0Z3W1hx6EAMg.JPEG%2FIMG_3686.jpg&type=a340"
        },
        {
            id: 3,
            name: "피로22이송민",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTFfNTUg%2FMDAxNjk0NDM1NTAyNjMy.S0QIqq6oaTRLCte3hwbHK-Y3NQMH7cbYe979gz4RMz8g.Em-Qi7h_Mp-AdWScwYhhVexEeu-tjeZXmg7I1vEGMvgg.JPEG.alstj971020%2FIMG_0412.JPG&type=a340"
        },
        {
            id: 4,
            name: "피로22김민수",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjlfODMg%2FMDAxNjAxMzgzMDc3NDc2.TsSYhqyjc6VYqaJ5uCnrgODCvtF9YeD_odI2NZ0wzSEg.XmBCMcl2-kSMLpojVhPShbq952F4dkGwNNRLHXo2vv8g.JPEG.pompurin12%2FIMG_3444.JPG&type=sc960_832"
        },
        {
            id: 5,
            name: "손흥민",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F413%2F2024%2F05%2F20%2F0000177149_001_20240520135901373.jpg&type=a340"
        },
        {
            id: 6,
            name: "토순이",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDVfMTIy%2FMDAxNjIwMTQ0MjQ1ODcw.AKNZKn1trhLocK2YFhLPi7A1O5J9sEQnBb0DmydaS1Mg.9EUe2zGM1W5gk4qjJ8W0WZ0mhfnCBnpYQQKK70hk9ncg.JPEG.06heyjin06%2F20210219_220700.jpg&type=a340"
        },
        {
            id: 7,
            name: "누구세요",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjExMDRfMjY3%2FMDAxNjY3NTQ5MjcwMTE0.qvo_iIP10NUeupeUPP1j4H3bzLcYzsWEzXLORhML6KIg.K81lA4sneNKrD9FOIn3hQWlmyBV4j17JMrPpfBr4ZK4g.JPEG.dbdidna23%2F3.jpg&type=sc960_832"
        },
        {
            id: 8,
            name: "ㄱ.엄마",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160403_71%2Fwkao9489_1459683394411KJHiB_JPEG%2FNaverBlog_20160403_203633_03.jpg&type=a340"
        },
        {
            id: 5,
            name: "ㄱ.아빠",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTJfMTQ0%2FMDAxNjgxMzAzMTYzNjM5.gyZteCC7vbd6hoEJeuEgpjmi6RKz9_r8ialsP8yY7kkg.gBas-f3lJSLcPUUNOMmfCI7JqQzm-ZM8guwkdVSyenAg.JPEG.lhm9793%2FIMG_2891.jpg&type=a340"
        },
    ];

    const friends = [
        {
            id: 8,
            name: "ㄱ.엄마",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160403_71%2Fwkao9489_1459683394411KJHiB_JPEG%2FNaverBlog_20160403_203633_03.jpg&type=a340"
        },
        {
            id: 5,
            name: "ㄱ.아빠",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTJfMTQ0%2FMDAxNjgxMzAzMTYzNjM5.gyZteCC7vbd6hoEJeuEgpjmi6RKz9_r8ialsP8yY7kkg.gBas-f3lJSLcPUUNOMmfCI7JqQzm-ZM8guwkdVSyenAg.JPEG.lhm9793%2FIMG_2891.jpg&type=a340"
        },
        {
            id: 1,
            name: "고예지",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjZfMTMx%2FMDAxNjc5ODMyODAzMDQ4.-1KVMtPEwnKh7A_rpVY4nhN1ZegdppS-bOg0_aB6xPUg.l59imSaWOMmV_FvFxrD39UT9kFdBU39ggfAa0MhLCz8g.PNG.npay1%2F20230326%25A3%25DF194132%25A3%25DF190.png&type=a340"
        },
        {
            id: 2,
            name: "구민서",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMDhfMjc1%2FMDAxNzA3MzIwNTAxMDg5.HSDT0glxpQe9gHhJ82LWdUuGC6qqIpmW8T1aYIqV9Vgg.CdWAeXpxU8D37t_hYWSRraVxqCkrcqtdGYN4CT9LmLgg.JPEG.dbdidna23%2F11.jpg&type=a340"
        },
        {
            id: 2,
            name: "김보연",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA3MjRfMjMy%2FMDAxNjkwMTY3Njc2NTky.upNRQFs6pbqF1o7ng2RLF0TLmQ9YN9V31WLb3q39tFcg.fXDeDjgOgDNzCMTvwq9CQ-817Fc-EEzGHOYxmdG4x6kg.JPEG.jobobo12%2FIMG_0838.JPG&type=a340"
        },
        {
            id: 2,
            name: "김소연",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjJfMjU0%2FMDAxNTk4MDcxNzg1Mjky.51j1x9kPNWo1OXIiPbnrphpOEffEVDbgsNOB0Th-YNkg.lcuZmfQGgNwu2y0WE3a1VryBOnbm5f_l2vrna1K2EtEg.JPEG.subindal%2FIMG_3663.JPG&type=a340"
        },
        {
            id: 2,
            name: "김아영",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTFfNTUg%2FMDAxNjk0NDM1NTAyNjMy.S0QIqq6oaTRLCte3hwbHK-Y3NQMH7cbYe979gz4RMz8g.Em-Qi7h_Mp-AdWScwYhhVexEeu-tjeZXmg7I1vEGMvgg.JPEG.alstj971020%2FIMG_0412.JPG&type=a340"
        },
        {
            id: 2,
            name: "김주연",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEyMjdfMjgx%2FMDAxNjQwNTU3NDY1NTk0.qG2Ly1w-ci-rSGfkqlVkrZFoj7hRmx_q9XRYVIMC9Kcg.V15aVxEX5IpvAdgvAymjcuZ7xLaz_VKP7CptCQlPqpQg.JPEG.gmlwjd5363%2FFB%25A3%25DFIMG%25A3%25DF1640557112620.jpg&type=a340"
        },
        {
            id: 2,
            name: "김연아",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA3MzFfNTUg%2FMDAxNzIyMzU4MjQ0MzMw.PJlBy3IpFdZUApOizbxhTIGP5P2h_Mc5x8vb3uK3UyUg.bzOpTc1oxZbau6znjRHRFWerF3WtdgDd0Z3W1hx6EAMg.JPEG%2FIMG_3686.jpg&type=a340"
        },
        {
            id: 3,
            name: "김형석",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA0MTVfMTg4%2FMDAxNjgxNTQ2NjQzNDI5.srfdh735dkpjmNeAYgtq5oZVzLTJTmJhrq2-pKn27Eog.W_F6K2zZYgox4zDS6yua7VqVvelid-1LAPVNE22KRDkg.JPEG.0426777%2FIMG_1914.JPG&type=a340"
        },
        {
            id: 7,
            name: "누구세요",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MTlfMjcw%2FMDAxNjkyMzk0MjM0MTc5.W4CyJg5XnH7Oo0xtGFAc-LkzWwa75m-PyG2x8lbpssgg.aAZdBp2nYD5JyeUNvm0jiPhWVLPh7FrKYfIATos8dEwg.PNG.jjungaang%2Fpfp%25A3%25DFlvory%25A3%25DFuzubaong.png&type=a340"
        },
        {
            id: 5,
            name: "손흥민",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F413%2F2024%2F05%2F20%2F0000177149_001_20240520135901373.jpg&type=a340"
        },
        {
            id: 2,
            name: "이가현",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMDhfMTMw%2FMDAxNjczMTg0NjE4ODI5.HxAiPCX9-l5uhoD_nWmebfduv8k9Rsr_wdyNei5EXzYg.bXIf2uNXkh8T9HO1bJTmdqqlb2hm4TRF1068YdxNR3cg.JPEG.jieon2992%2FIMG_2330.JPG&type=a340"
        },
        {
            id: 6,
            name: "토순이",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA1MDVfMTIy%2FMDAxNjIwMTQ0MjQ1ODcw.AKNZKn1trhLocK2YFhLPi7A1O5J9sEQnBb0DmydaS1Mg.9EUe2zGM1W5gk4qjJ8W0WZ0mhfnCBnpYQQKK70hk9ncg.JPEG.06heyjin06%2F20210219_220700.jpg&type=a340"
        },
        {
            id: 4,
            name: "피로22김민수",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MjlfODMg%2FMDAxNjAxMzgzMDc3NDc2.TsSYhqyjc6VYqaJ5uCnrgODCvtF9YeD_odI2NZ0wzSEg.XmBCMcl2-kSMLpojVhPShbq952F4dkGwNNRLHXo2vv8g.JPEG.pompurin12%2FIMG_3444.JPG&type=sc960_832"
        },
        {
            id: 3,
            name: "피로22안시환",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA4MTlfNzgg%2FMDAxNjYwODkwODM4OTc4.OxDyaMK9Q-bnj4V_B2ac0BdHtdYMzjfcsp3aSMWc3r4g.YkkYCsBugVzUzHDl1JKprPoWaix1xfQwNOqabMHpuHsg.JPEG.bottlegod1%2Fa6b4e6ea7c7e24258e7c4b5433af1fef.jpg&type=a340"
        },
        {
            id: 3,
            name: "피로22이송민",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTFfNTUg%2FMDAxNjk0NDM1NTAyNjMy.S0QIqq6oaTRLCte3hwbHK-Y3NQMH7cbYe979gz4RMz8g.Em-Qi7h_Mp-AdWScwYhhVexEeu-tjeZXmg7I1vEGMvgg.JPEG.alstj971020%2FIMG_0412.JPG&type=a340"
        },
        {
            id: 1,
            name: "피로22최승호",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMjhfMTA4%2FMDAxNjgwMDAyNTc0MjUz.0xCsmv17XQB15qmTrEIsYNddkfETbnesM8OVTwlFY6cg.8fcaYp-HP7EeI7rbt5g8xCL8wv4WjOw0nDMOKhu8sekg.PNG.npay1%2F20230326%25A3%25DF202548%25A3%25DF390.png&type=a340"
        },
        {
            id: 2,
            name: "최은재",
            image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDNfMjk3%2FMDAxNjc3ODQ5NzcwNzcz.4zZlxycbdzEHBDIUNk-93Z69K8yPzf2K5wLNwMULFrYg.IPuEEwq2dGaEGewSchfcpPNo4_DGt0P50LSTB65Ne4og.JPEG.jieon2992%2FIMG_7929.JPG&type=a340"
        },


    ];

    return (
        <PageContainer>
            <ContentWrapper>
                <ProfileSection>
                    <ProfileImage
                        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTEyMDZfMjcx%2FMDAxNTc1NTYzNzEyNTM3.NE23qFHhyfZKWAPRmuhHEXeEDpQZskuR5zAgn3qtgmYg.fQRlKq0M3EzwhE3WidRMeVocn7EDjXEDFPcCfZCH4tYg.JPEG.sunjung4575%2FIMG_2341.JPG&type=sc960_832"
                        alt="My Profile"/>
                    <ProfileName>이지현</ProfileName>
                </ProfileSection>
                <Section>
                    <SectionTitle onClick={toggleProfileList}>
                        <SectionTitleText>
                            업데이트한 프로필
                            <CountBadge>{updatedProfiles.length}</CountBadge>
                        </SectionTitleText>
                        {isProfileListOpen ? <FaChevronUp/> : <FaChevronDown/>}
                    </SectionTitle>
                    <SectionContent isOpen={isProfileListOpen}>
                        <HorizontalScrollList>
                            {updatedProfiles.map((profile) => (
                                <UpdatedProfileItem key={profile.id}>
                                    <ItemImage src={profile.image} alt={profile.name}/>
                                    <ItemName>{truncateName(profile.name)}</ItemName>
                                </UpdatedProfileItem>
                            ))}
                        </HorizontalScrollList>
                    </SectionContent>
                </Section>

                <Section>
                    <SectionTitle onClick={toggleFriendsList}>
                        <SectionTitleText>
                            친구
                            <CountBadge>{friends.length}</CountBadge>
                        </SectionTitleText>
                        {isFriendsListOpen ? <FaChevronUp/> : <FaChevronDown/>}
                    </SectionTitle>
                    <SectionContent isOpen={isFriendsListOpen}>
                        <FriendsList>
                            {friends.map((friend) => (
                                <FriendItem key={friend.id}>
                                    <FriendImage src={friend.image} alt={friend.name}/>
                                    <FriendName>{friend.name}</FriendName>
                                </FriendItem>
                            ))}
                        </FriendsList>
                    </SectionContent>
                </Section>
            </ContentWrapper>
        </PageContainer>
    );
};

export default FriendsPage;