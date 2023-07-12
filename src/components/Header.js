import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const goToPreviousPage = () => {
        navigate(-1); // -1을 전달하여 이전 페이지로 이동
    };
    const location = useLocation();
    return (
        <header className="header">
            <div className="header-container">
                <button className="header-back-button" onClick={goToPreviousPage}></button>
                <h1 className="header-title">{getPageTitle(location.pathname)}</h1>
            </div>
        </header>
    );
}


export default Header;

const getPageTitle = (pathname) => {
    let title = 'Default Title';

    switch (pathname) {
        case '/':
            title = '새식일기 퍼블리시 리스트';
            break;
        case '/about':
            title = 'About';
            break;
        case '/components':
            title = '퍼블리시 컴포넌트'
            break;
        case '/adoption_record':
            title = '분양 기록'
            break;
        // Add more cases for other routes
        default:
            break;
    }

    return title;
};