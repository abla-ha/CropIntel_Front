import './index.css'
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';

export default function NavMenu() {

    const [selected, setSelected] = useState('');

    const navOn = useSelector(state => state.nav.navOn);

    const location = useLocation()

    const navBodyItems = {
        "dashboard": {
            Icon: '/images/menu-icons/dashboard.svg',
            text: "Dashboard",
            url: '/home'
        },
        "soil": {
            Icon: '/images/menu-icons/moisture.svg',
            text: "Soil",
            url: '/home/Soil'
        },
        "weather": {
            Icon: '/images/menu-icons/weather.svg',
            text: "Weather",
            url: 'https://weather-cropintel.vercel.app/'
        },
        "crops": {
            Icon: '/images/menu-icons/crops.svg',
            text: "Crops",
            url: '/home/crops'
        },
        "pest-detection": {
            Icon: '/images/menu-icons/pest.svg',
            text: "Pest Detection",
            url: '/home/Disease-detection'
        }
    }

    useEffect(() => {
        const sectionName = location.pathname.replace("/", "");
        if(sectionName === "") {
            setSelected("dashboard");
        }
        else {
            setSelected(sectionName);
        }
    }, [location.pathname]);

    useEffect(() => {
        console.log(navOn)
    }, [navOn])

    return (
        <div className={"navmenu " + (navOn ? "navmenu-on" : "navmenu-off")}>
            <div className="nav-container">
                <div className="nav-header">
                    <div className="nav-item">
                        <div className='icon-container'>
                            <img src={'/images/menu-icons/menu-logo.svg'} alt={'Small logo'}/>
                        </div>
                        <h2>Crop<span className={"colored"}>Intel</span></h2>
                    </div>
                </div>

                <div className="nav-body">
                    {
                        Object.keys(navBodyItems).map(((navKey, index) => {
                            const {Icon, text, url} = navBodyItems[navKey];
                            const isSelected = navKey === selected;
                            return (
                                <Link key={`${JSON.stringify(navBodyItems[navKey])} - ${index}`} to={url}>
                                    <div className="nav-item">
                                        <div className='icon-container'>
                                            <img src={navBodyItems[navKey].Icon} alt={navKey} />
                                        </div>
                                        <p className={isSelected ? 'colored' : 'normal'}>{text}</p>
                                    </div>
                                </Link>
                            );
                        }))
                    }
                </div>

                <div className="nav-footer">
                    <div className="nav-item">
                        <div className='icon-container'>
                            <img src={'/images/carbon_settings.svg'} alt={'Settings icon'}/>
                        </div>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    );
}