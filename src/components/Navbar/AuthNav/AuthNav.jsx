import { NavLink } from "react-router-dom";
import items from "./AuthItems"
import s from './AuthNav.module.css';

const getClassName = ({isActive}) => {
    return isActive ? `${s.link} ${s.active}`: s.link; 
}

const AuthNav = () => {
    const elements = items.map(({id, to, text}) => (
        <li key={id} className={s.list}>
            <NavLink className={getClassName} to={to}>{text}</NavLink>
        </li>
    ));

    return (
        <ul className={s.menu}>
            {elements}
        </ul>
    )
}

export default AuthNav;