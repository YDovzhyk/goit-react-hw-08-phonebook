import { useSelector, useDispatch } from "react-redux";

import RegisterForm from "./RegisterForm";

import { register } from "../../redux/auth/auth-operations";
import  authSelectors  from "../../redux/auth/auth-selectors"

import s from "../../components/Phonebook/ContactList/contactList.module.css"

import PropTypes from 'prop-types';

export const Register = () => {
    const dispatch = useDispatch();
    const error = useSelector(authSelectors.getStateError);

    const onAddUser = store => {
        const action = register(store);
        dispatch(action)
    };

    let errorText = '';
    if(error) {
        errorText = `Something went wrong, please try again`;
    }

    return (
        <div className={s.loginform}>
        <RegisterForm onSubmit={onAddUser} />
        {error && <p className={s.errorText}>{errorText}</p>}
        </div>
    )
}

export default Register;

Register.defaultProps = {
    error: () => {},
}

Register.propTypes = {
    error: PropTypes.func,
}