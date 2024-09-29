import React from 'react';
import './HeaderRight.css'; // 스타일 시트 연결
import profilePic from '../assets/profile.jpg'; // 프로필 사진 경로
import plusPic from '../assets/plus.png';
import issuePic from '../assets/issue.png';
import prPic from '../assets/풀 리퀘스트.png';
import inbox from '../assets/inbox.svg';

const HeaderRight = () => {
  return (
    <div className="header-right">
      <button className="icon-button">
        <img src={plusPic} alt="Plus btn" className="plus-pic" />
        <i className="fas fa-plus"></i>
      </button>
      <button className="icon-button">
        <img src={issuePic} alt="Issue btn" className="issue-pic" />
        <i className="fas fa-chevron-down"></i>
      </button>
      <button className="icon-button">
        <img src={prPic} alt="PR btn" className="pr-pic" />
        <i className="fas fa-circle"></i>
      </button>
      <button className="icon-button">
        <img src={inbox} alt="Inbox btn" className="inbox-pic" />
        <i className="fas fa-toolbox"></i>
      </button>
      <div className="profile-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="status-dot"></span>
      </div>
    </div>
  );
};

export default HeaderRight;
