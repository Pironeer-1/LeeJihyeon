import React from 'react';
import './Sidebar.css';
import profilePic from '../assets/profile.jpg';
import redPr from '../assets/Code Pull Request.png';
import pironeerPic from '../assets/pironeer.png';
import pirogrammingPic from '../assets/pirogramming.png';
import kuitPic from '../assets/kuit.png';
import aayoPic from '../assets/aayo.png';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="profile-section">
                <img src={profilePic} alt="Profile" className="profile-image" />
                <p className="username">ljh130334</p>
                <span className="dropdown-arrow">▼</span>
            </div>
            
            <div className="repositories-section">
                <div className="repo">
                    <h3>Top repositories</h3>
                    <button className="new-repo-button">New</button>
                </div>
                <input type="text" className="search-repo" placeholder="Find a repository..." />
                <ul className="repository-list">
                    <div className='repo-name'>
                        <img src={pironeerPic} alt="Proneer" className="logo-image" />
                        <li className="repository-item">Pirooneer-1/LeeJihyeon</li>
                    </div>
                    <div className='repo-name'>
                        <img src={pirogrammingPic} alt="Pirogramming" className="logo-image" />
                        <li className="repository-item">Pirogramming-21/Lee-Jihyeon</li>
                    </div>
                    <div className='repo-name'>
                        <img src={aayoPic} alt="Aayo" className="logo-image" />
                        <li className="repository-item">shwnahn/aayo</li>
                    </div>
                    <div className='repo-name'>
                        <img src={pirogrammingPic} alt="Pirogramming" className="logo-image" />
                        <li className="repository-item">Pirogramming-21/Piro21_PythonGame_5</li>
                    </div>
                    <div className='repo-name'>
                        <img src={kuitPic} alt="Kuit" className="logo-image" />
                        <li className="repository-item">Konkuk-KUIT/KUIT4_Web-FrontEnd</li>
                    </div>
                    <div className='repo-name'>
                        <img src={pirogrammingPic} alt="Pirogramming" className="logo-image" />
                        <li className="repository-item">Pirogramming-21/Piro21_Arsha_05</li>
                    </div>
                    <div className='repo-name'>
                        <img src={profilePic} alt="Profile" className="logo-image" />
                        <li className="repository-item">ljh130334/Git_test</li>
                    </div>
                </ul>
                <p className="show-more">Show more</p>
            </div>

            <div className="activity-section">
                <h3>Recent activity</h3>
                <div className='pr-activity'>
                    <img src={redPr} alt="RedPR" className='red-pr' />
                    <p className="activity-item">
                        Konkuk-KUIT/KUIT4_Web-FrontEnd<br />
                        [2주차] 당근마켓 화면1 미션
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
