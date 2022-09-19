import { useMemo } from "react";
import useForm from '../../components/Phonebook/ContactForm/useForm';
import shortid from "shortid";
import PropTypes from 'prop-types';
import initialState from "../Login/loginInitialState";

import s from "../Register/RegisterForm.module.css";


const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const userEmailId = useMemo(()=> shortid(), []);

    const userPasswordId = useMemo(()=> shortid(), []);
    
    const {email, password} = state;

    
    return (
        <form onSubmit={handleSubmit} className={s.userForm}>
            <h2>Login</h2>
            <label htmlFor={userEmailId}>
                Email
                <input
                    className={s.userInputEmail}
                    type="email"
                    name="email"
                    pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                    title=""
                    value={email}
                    onChange={handleChange}
                    id={userEmailId}
                    placeholder = "Your Email address"
                    required
                />
            </label>
                
            <label htmlFor={userPasswordId}>
                Password
                <input
                    className={s.userInputPassword}
                    type="password" 
                    name="password"
                    size="20" 
                    title="Enter password"
                    value={password}
                    onChange={handleChange}
                    id={userPasswordId}
                    autoComplete="on"
                    placeholder = "Enter your password"
                    required
                />
            </label>

            <button type='submit' className={s.phoneFormButton}>Login</button>
        </form>

    )
}

export default RegisterForm;

RegisterForm.defaultProps = {
    onSubmit: () => {},
    initialState: {},
}

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
    initialState: PropTypes.shape({
        password: PropTypes.string,
        email: PropTypes.string,
        }),    
}