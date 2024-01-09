import React from "react";
import logo from '../Img/logo.svg'
import '../Style/header.css'

const Header = () => {

    return (
        <header>
            <img src={logo} alt="logo" />
            <ul>
                <a href="#">
                    <li>Accueil</li>
                </a>
                <a href="#">
                    <li>Blog</li>
                </a>
                <a href="#">
                    <li>Gardiennage</li>
                </a>
            </ul>

            <div className="button-header">
                <button className="header-btn-Inscription">Inscription</button>
                <button className="header-btn-Connexion">Connexion</button>
            </div>

        </header>
    )
}

export default Header;