import './index.css'
import NavMenu from "../../components/NavMenu/index.jsx";
import {Outlet} from "react-router-dom";
export default function Home() {
    return (
        <div id="home">
            <NavMenu/>
            <div className="left-side">
            </div>
            <Outlet/>
        </div>
    );
}