import { useDispatch, useSelector } from 'react-redux';
import {logOut} from "../../../redux/auth/auth-operations"
import authSelectors from '../../../redux/auth/auth-selectors';

import defaultAvatar from './default-avatar.jpg'
import s from './UserMenu.module.css'


const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const avatar = defaultAvatar;

    return (
        <ul className={s.menu}>
            <li className={s.list}>
                <img src={avatar} alt="" className={s.img}></img>
                <p>Welcom to site, <span className={s.userName}>{name}</span></p>
                <button type='button' onClick={() => dispatch(logOut())} className={s.button}>Logout</button>
            </li>
        </ul>
    )
}

export default UserMenu;