import { Outlet } from "react-router";
import Header from './Header';

const UsersLayout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <Outlet />
            </div>
        </>
    );
}

export default UsersLayout;