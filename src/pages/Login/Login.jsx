import { useSelector, useDispatch } from "react-redux";

import LoginForm from "./LoginForm";

import { logIn } from "../../redux/auth/auth-operations";
import  authSelectors  from "../../redux/auth/auth-selectors"

import s from "../../components/Phonebook/ContactList/contactList.module.css"
import PropTypes from 'prop-types';

export const Login = () => {
    const dispatch = useDispatch();
    const error = useSelector(authSelectors.getStateError);

    const onAddUser = store => {
        const action = logIn(store);
        dispatch(action)
    };

    let errorText = '';
    if(error) {
        errorText = `Invalid username or password`;
    }
    return (
        <div className={s.loginform}>
        <LoginForm onSubmit={onAddUser} />
        {error && <p className={s.errorText}>{errorText}</p>}
        </div>
    )
}

export default Login;

Login.defaultProps = {
    error: () => {},
}

Login.propTypes = {
    error: PropTypes.func,
}