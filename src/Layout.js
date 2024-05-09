import { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/Login');
    }, [])
    return (
        <>
            <nav>
                {/* <ul>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul> */}
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;