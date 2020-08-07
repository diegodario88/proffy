import React from 'react';

import PageHeader from '../../components/Page-Header';
import TeacherItem from '../../components/Teacher-Item';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são nossos melhores Proffys">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Disciplina</label>
                        <input type="text" name="disciplina" id="subject" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" name="diaDaSemana" id="week-day" />
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" name="hora" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList;