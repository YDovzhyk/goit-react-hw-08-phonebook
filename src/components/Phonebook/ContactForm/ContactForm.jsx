import { useMemo } from "react";
import useForm from './useForm';
import shortid from "shortid";
import PropTypes from 'prop-types';
import initialState from "./initialState";

import s from "./contactForm.module.css";

const ContactForm = ({onSubmit}) => {

    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const nameId = useMemo(()=> shortid(), []);
    const numberId = useMemo(()=> shortid(), []);
    const familyId = useMemo(()=> shortid(), []);
    
    const {name, number, family} = state;
    
    return (
        <form onSubmit={handleSubmit} className={s.phoneForm}>
            <label htmlFor={nameId}>
                Name
                <input
                    className={s.phoneInputName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value={name}
                    onChange={handleChange}
                    id={nameId}
                    required
                />
            </label>

            <label htmlFor={numberId}>
                Number
                <input
                    className={s.phoneInputNumber}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value={number}
                    onChange={handleChange}
                    id={numberId}
                    required
                />
                </label>
                <label html={familyId}>
                    <input
                    className={s.phoneInputLicence}
                    value={family}
                    type="checkbox"
                    name="family"
                    checked={family}
                    onChange={handleChange}
                    id={familyId}
                    />
                    <span className={s.licenceText}>If family contact</span>
                </label>

                <button type='submit' className={s.phoneFormButton}>Add contact</button>
            </form>
    )
}

export default ContactForm;

ContactForm.defaultProps = {
    onSubmit: () => {}
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}