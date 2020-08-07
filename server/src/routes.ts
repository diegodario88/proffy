import express, { response } from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

interface scheduleItem {
    week_day: number,
    from: string,
    to: string
}

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ welcomeMessage: 'Welcome to ProffyAPI!! ' })
});

routes.post('/classes', async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    const trx = await db.transaction();

    try {
        const insertedUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio
        });

        const user_id = insertedUsersIds[0];

        const insertedClassesIds = await trx('classes').insert({
            subject,
            cost,
            user_id
        });

        const class_id = insertedClassesIds[0];

        const classSchedule = schedule.map((classScheduleItem: scheduleItem) => {
            return {
                class_id,
                week_day: classScheduleItem.week_day,
                from: convertHourToMinutes(classScheduleItem.from),
                to: convertHourToMinutes(classScheduleItem.to),
            }
        })


        await trx('class_schedule').insert(classSchedule);

        await trx.commit();

    } catch (err) {
        await trx.rollback();

        return response.status(400).json(
            { error: 'Unexpected error while creating new class' }
        );
    }

    return response.status(201).send();
});

export default routes;