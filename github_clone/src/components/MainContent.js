import React from 'react';
import './MainContent.css';
import dotPic from '../assets/dot.png';
import arrowPic from '../assets/좌우 화살표.png';
import msPic from '../assets/멋사.png';
import pironeer1Pic from '../assets/pironeer.png';
import kurumPic from '../assets/ku-rum.png';
import starPic from '../assets/star.png';

const MainContent = () => {
    return (
        <div className="mid-content">
            <div className="main-content">
            {/* 상단 헤더 영역 추가 */}
                <div className="header-section-1">
                    <h1>Home</h1>
                    <div className="header-section-link">
                        <a href="#" className="feedback-link">Send feedback</a>
                        <button className="filter-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M5.25 12h13.5M8.25 18.75h7.5" />
                            </svg>
                            Filter
                        </button>
                    </div>
                </div>
                <div className="header-section-2">
                    <button className="back-button">
                        <img src={arrowPic} alt="Arrow" className="arrow-image" />
                        Start writing code
                    </button>
                    <button className="dot-button">
                        <img src={dotPic} alt="Dot" className="dot-image" />
                    </button>
                </div>
                {/* 왼쪽 메인 콘텐츠 영역 */}
                <div className="left-section">
                    <div className='first-left-section'>
                        <div className="start-repository">
                            <h3>Start a new repository for ljh130334</h3>
                            <p className='repo-information'>A repository contains all of your project's files, revision history, and collaborator discussion.</p>
                            <div className="input-group">
                                <label htmlFor="repositoryName">Repository name *</label>
                                <input type="text" id="repositoryName" placeholder="name your new repository..." />
                            </div>
                            <div className="radio-group">
                                <input type="radio" id="public" name="repoType" />
                                <label htmlFor="public">Public</label>
                                <p>Anyone on the internet can see this repository</p>
                                <input type="radio" id="private" name="repoType" defaultChecked />
                                <label htmlFor="private">Private</label>
                                <p>You choose who can see and commit to this repository</p>
                            </div>
                            <button className="create-repo-button">Create a new repository</button>
                        </div>

                        <div className="profile-readme">
                            <h3>Introduce yourself with a profile README</h3>
                            <p className='repo-information'>Share information about yourself by creating a profile README, which appears at the top of your profile page.</p>
                            <div className="readme-preview">
                                <p>ljh130334/README.md</p>
                                <button className="create-button">Create</button>
                                <pre>
                                    1 - 👋 Hi, I’m @ljh130334<br />
                                    2 - 👀 I’m interested in ...<br />
                                    3 - 🌱 I’m currently learning ...<br />
                                    4 - 💞 I’m looking to collaborate on ...<br />
                                    5 - 📫 How to reach me ...<br />
                                    6 - 😄 Pronouns: ...<br />
                                    7 - ⚡ Fun fact: ...
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 오른쪽 사이드바 영역 */}
            <div className="main-right">
                <div className="latest-changes">
                    <h3>Latest changes</h3>
                    <ul>
                        <li className='time'>7 hours ago</li>
                        <ul className='introduction'>Introducint "CI/CD Admin" - A New Pre- Defined Organization Role for GitHub Actions</ul>
                        <li className='time'>10 hours ago</li>
                        <ul className='introduction'>CodeQL 2.19.0: TypeScript 5.6 and Go 1.23 support, new queries for JavaScript and Ruby</ul>
                        <li className='time'>12 hours ago</li>
                        <ul className='introduction'>Actions: new images and ubuntu-latest changes</ul>
                        <li className='time'>13 hours ago</li>
                        <ul className='introduction'>End of life for Actions Node 16</ul>
                    </ul>
                    <span className='changelog'>View changelog →</span>
                </div>

                {/* Explore Repositories */}
                <div className="explore-repositories">
                    <h3>Explore repositories</h3>
                    <div className="repository-item">
                        <div className="repository-info">
                            <div className='repository-logo'>
                                <img src={msPic} alt="mutsa" className="logo-image" />
                                <span className="repository-name">Like-Lion-Team-WAY / WAY</span>
                            </div>
                            <p>멋쟁이사자처럼 최종프로젝트</p>
                            <div className="repository-meta">
                                <span className="star">
                                    <img src={starPic} alt="star" className="star-image" />
                                    3
                                </span>
                                <span className="language-color"></span> Java
                            </div>
                        </div>
                    </div>

                    <div className="repository-item">
                        <div className="repository-info">
                            <div className='repository-logo'>
                                <img src={kurumPic} alt="kurum" className="logo-image" />
                                <span className="repository-name">KU-rum / backend</span>
                            </div>
                            <p>건국대학교 맞춤형 대학 생활 가이드, Ku:rum</p>
                            <div className="repository-meta">
                                <span className="language-color"></span> Java
                            </div>
                        </div>
                    </div>

                    <div className="repository-item">
                        <div className="repository-info">
                            <div className='repository-logo'>
                                <img src={pironeer1Pic} alt="pironeer" className="logo-image" />
                                <span className="repository-name">Pironeer-1 / LeeGeonhee</span>
                            </div>
                            <div className="repository-meta">
                                <span className="language-color"></span> Java
                            </div>
                        </div>
                    </div>

                    <a href="#" className="explore-more">Explore more →</a>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
