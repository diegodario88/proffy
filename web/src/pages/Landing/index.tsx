import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import { Link } from 'react-router-dom';
import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="Proffy logomark" />
                    <h2>
                        Uma plataforma de estudos online, com foco no aprimoramento humano.
                    </h2>
                </div>
                <img
                    src={LandingImg}
                    alt="Ambiente de estudos"
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={StudyIcon} alt="Estudar" />
                    Estudar</Link>

                    <Link to="/classes" className="give-classes">
                        <img src={GiveClassIcon} alt="Lecionar" />
                    Lecionar</Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;
