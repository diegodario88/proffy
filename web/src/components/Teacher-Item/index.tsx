import React from 'react';
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars1.githubusercontent.com/u/25825145?s=460&u=53989036e5cd8345abe5ea44cf7ee60614b609c2&v=4"
                    alt="Avatar" />
                <div>
                    <strong>Diego Dario</strong>
                    <span>Linguagem de Programação</span>
                </div>
            </header>
            <p>
                Entusiasta da tecnologia de informação. <br /> <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus deleniti esse expedita corporis iure numquam quas fugit harum, qui, dolorem facilis. Unde perferendis ratione adipisci minima ducimus aperiam impedit atque.
        </p>
            <footer>
                <p>
                    Preço/Hora
                <strong>
                        R$  100,00
                </strong>
                </p>
                <button type="button">
                    <img src={WhatsAppIcon} alt="WhatsApp icon" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;