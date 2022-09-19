import { useMemo } from "react";
import initialState from "./userInitialState";
import useForm from '../../components/Phonebook/ContactForm/useForm';
import shortid from "shortid";
import PropTypes from 'prop-types';

import s from "./RegisterForm.module.css";

const RegisterForm = ({onSubmit}) => {

    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const userNameId = useMemo(()=> shortid(), []);
    const userEmailId = useMemo(()=> shortid(), []);
    const userPasswordId = useMemo(()=> shortid(), []);

    const {name, email, password} = state;

    
    return (
        <form onSubmit={handleSubmit} className={s.userForm}>
            <h2>Registration</h2>
            <label htmlFor={userNameId}>
                User name
                <input
                    className={s.userInputName}
                    type="text"
                    name="name"
                    size="20" 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleChange}
                    id={userNameId}
                    placeholder="Your Name"
                    required
                />
            </label>

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
                    title=""
                    value={password}
                    onChange={handleChange}
                    id={userPasswordId}
                    autoComplete="off"
                    placeholder = "Enter your password"
                    required
                />
            </label>

            <button type='submit' className={s.phoneFormButton}>Register</button>
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