import React from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import HeaderRight from './HeaderRight'
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                {/* 햄버거 메뉴 아이콘 */}
                <button className="menu-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 menu-icon"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5" />
                    </svg>
                </button>

                {/* GitHub 로고 */}
                <img
                    src={logo}
                    alt="GitHub Logo"
                    className="github-logo"
                />

                {/* 대시보드 텍스트 */}
                <span className="dashboard-text">Dashboard</span>
            </div>

            {/* 헤더의 나머지 부분 */}
            <div className="header-center">
                <SearchBar /> {/* 검색창 추가 */}
            </div>
            <div className="header-right">
                <HeaderRight />
                {/* <button className="header-icon">+</button>
                <button className="header-icon">⏺</button>
                <button className="header-icon">🔀</button>
                <button className="header-icon">📁</button>
                <img
                    src="path_to_profile_image"
                    alt="Profile"
                    className="profile-img"
                /> */}
            </div>
        </header>
    );
};

export default Header;
