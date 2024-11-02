
import Card from "../shared/Card.jsx";
import {NavLink, Outlet} from "react-router-dom";

const RootPage = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    LOGO
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
                    login
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default RootPage;
