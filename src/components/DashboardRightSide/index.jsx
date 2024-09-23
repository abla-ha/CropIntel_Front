import { useState } from 'react';
import './index.css'
import CIEvent from '../CIEvent';
import CICards from '../CICards';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Panel from '../Panel';

export default function DashboardRightSide() {

    const [events, setEvents] = useState([
        {
            type: 'info',
            text: "You have to add the Corn Earworm Insecticides"
        },
        {
            type: 'harvest',
            text: "Wheat field"
        }
    ]);

    const [fields, setFields] = useState([
        {
            title: "Corn field",
            image: "/images/dummies/corn.png",
            size: "17ha",
            text: "Harvest on July 15th"
        },
        {
            title: "Wheat field",
            image: "/images/dummies/wheat.png",
            size: "17ha",
            text: "Harvest on June 26th"
        }
    ]);

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="dashboardrightside">
            <div className='event-container'>
                <h2>Today</h2>
                <br />
                <div>
                    <div className='events'>
                        {
                            events.map((event, index) => {
                                return (
                                    <CIEvent
                                        key={JSON.stringify(event) + index}
                                        type={event.type}
                                        text={event.text}
                                    />
                                )
                            })
                        }
                    </div>

                    <Panel className='calendar'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
                        </LocalizationProvider>
                    </Panel>
                </div>
            </div>
            <br />
            <div className='fields-container'>
                <h2>Fields</h2>
                <br />
                <div>
                    {
                        fields.map((field, index) => {
                            return (
                                <CICards
                                    key={JSON.stringify(field) + index}
                                    title={field.title}
                                    image={field.image}
                                    size={field.size}
                                    text={field.text}
                                    className="field"
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}