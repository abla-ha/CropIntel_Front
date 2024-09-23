import { useDispatch, useSelector } from 'react-redux';
import './index.css'
import { jwtDecode } from 'jwt-decode'
import DashboardLeftSide from '../../../components/DashboardLeftSide';
import DashboardRightSide from '../../../components/DashboardRightSide';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { toggleNav } from '../../../slices/navbarSlice';

export default function Dashboard() {
    const token = useSelector(state => state.user);
    const user = jwtDecode(token);

    const navOn = useSelector(state => state.nav.navOn);
    const dispatch = useDispatch();

    return (
        <div id="dashboard">
            <div className='dashboard-g reet'>
                <h1>Hi {user.username} 👋🏻</h1>
                {
                    !navOn ?
                    <MenuIcon className='nav-burger' onClick={e => dispatch(toggleNav())}/>
                    :
                    <CloseIcon className='nav-burger' onClick={e => dispatch(toggleNav())}/>
                }
            </div>
            <div className='dashboard-container'>
                <DashboardLeftSide />
                <DashboardRightSide />
            </div>
        </div>
    );
}