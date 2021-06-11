import ReactDOM from 'react-dom';
import React from 'react';
import './Header.scss'

const Header = () => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="#">
                            <img src="images/11.png" alt="" />
                        </a>
                    </div>
                    <div className="headr__nav">
                        <nav className="menu">
                            <ul className="menu_list">
                                <li className="active">
                                    <a href="#">Поиск</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__login">
                            <a href="" className="header__btn">Войти</a>
                            <a href="" className="header__btn-registration">Регистрация</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

}

ReactDOM.render(
    <Header />,
    document.getElementById('root')
);

export default Header