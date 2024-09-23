import { useState } from 'react';
import './index.css'
import CICards from '../../../components/CICards';
import Panel from '../../../components/Panel';
import CIButton from '../../../components/CIButton'

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useDispatch, useSelector } from 'react-redux';

import { toggleNav } from '../../../slices/navbarSlice'

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';

export default function Crops() {
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

    const navOn = useSelector(state => state.nav.navOn);
    const dispatch = useDispatch();

    return (
        <div id="crops">
            <div className='header'>
                <h1>Crops</h1>
                {
                    !navOn ?
                    <MenuIcon className='nav-burger' onClick={e => dispatch(toggleNav())}/>
                    :
                    <CloseIcon className='nav-burger' onClick={e => dispatch(toggleNav())}/>
                }
            </div>

            <div className='grid-container'>
                <div className='fields-container'>
                    <h3>Current corps</h3>
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

                <Panel className='calendar'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={6} />
                    </LocalizationProvider>
                </Panel>
            </div>
            
            <div className='recommendation-container'>
                <h3>Crops Recommendation</h3>
                <br />
                <div>
                    We can help you find the best crops for your 
                    field! 
                </div>
                
                <Link to='/home/crops-recommendation'>
                    <CIButton
                        className='get-started-btn'
                    >
                        Get started
                    </CIButton>
                </Link>
            </div>
        </div>
    );
}