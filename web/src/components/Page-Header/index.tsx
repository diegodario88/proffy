import React from 'react';
import { Link } from 'react-router-dom';

import BackArrowIcon from '../../assets/images/icons/back.svg'
import LogoIcon from '../../assets/images/logo.svg'

import './styles.css';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={BackArrowIcon} alt="Flecha para esquerda" />
                </Link>

                <img src={LogoIcon} alt="Logomark" />
            </div>

            <div className="header-content">
                <strong>{title}</strong>
                {children}
            </div>
        </header>
    )
}

export default PageHeader;