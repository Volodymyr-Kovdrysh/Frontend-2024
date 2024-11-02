
import Card from "../shared/Card.jsx";
import {NavLink, Outlet} from "react-router-dom";
import {useContext} from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";
import {ImEnter, ImExit} from "react-icons/im";

const RootPage = () => {
    const {user, logout} = useContext(FeedbackContext)

    const handleExit = () => {
        logout()
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start text-base-content">
                    LOGO {user.email}
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal bg-base-200">
                        <li><NavLink to={'/app'} activeclassname={'active'}>
                            App
                        </NavLink></li>
                        <li><NavLink to={'/about'} activeclassname={'active'}>
                            Про додаток
                        </NavLink></li>
                        <li><NavLink to={'/params'} activeclassname={'active'}>
                            Демо параметрів
                        </NavLink></li>
                    </ul>



                </div>
                <div className="navbar-end">
                    {user.login ? <div onClick={handleExit}><ImExit size={32} /></div> : <NavLink to={'/login'} ><ImEnter size={32}/></NavLink>}
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default RootPage;
