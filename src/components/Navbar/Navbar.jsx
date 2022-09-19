import { useSelector } from "react-redux";
import Navigation from "./Navigation/Navigation";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import authSelectors from './../../redux/auth/auth-selectors';

import s from "./navbar.module.css";

const Navbar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <nav className={s.navbar}>
            <div className="container">
                <div className={s.row}>
                    {isLoggedIn && <Navigation />}
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;