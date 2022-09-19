import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Loader from "components/Loader/Loader";

import { fetchContacts, addContact, removeContact } from "../../redux/contacts/items/items-operations";
import {setFilter} from "../../redux/contacts/filter/filter-actions";

import { getFilteredContacts, getState } from "../../redux/contacts/items/items-selectors";
import {getFilter} from "../../redux/contacts/filter/filter-selectors";

import PropTypes from 'prop-types';
import s from "./ContactList/contactList.module.css"

export const Phonebook = () => {
    const contacts = useSelector(getFilteredContacts);
    const {loading, error} = useSelector(getState);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const onAddContact = data => {
        const action = addContact(data);
        dispatch(action)
    };

    const onRemoveContact = id => {
        dispatch(removeContact(id));
    };

    const handleFilter = ({target}) => {
        dispatch(setFilter(target.value));
    }

    let errorText = '';
    if(error && error.message === "Please authenticate") {
        errorText = `Something went wrong :-( ${error.message}`;
    }

    return (
        <div className={s.phonebook}>
            <h2 className={s.phonebookTitle}>Add contact</h2>
            <ContactForm onSubmit={onAddContact} />
            <h2 className={s.phonebookTitle}>Contacts</h2>
                <div className={s.contact}>
                    <input value={filter} name="filter" onChange={handleFilter} className={s.contactInput} placeholder="Filter contacts" />
                    {loading && <Loader className={s.loader}/>}
                    <div className={s.contactListBlock}>
                    {!loading && contacts.length > 0 && <ContactList items={contacts} removeContact={onRemoveContact}/>}
                    </div>
                    {error && <p className={s.errorText}>{errorText}</p>}
                </div>
        </div>
    )
}

export default Phonebook;

Phonebook.defaultProps = {
    getFilteredContacts: () => {},
    getFilter: () => {},
    data: {},
    id: "",
}

Phonebook.propTypes = {
    getFilteredContacts: PropTypes.func,
    getFilter: PropTypes.func,
    target: PropTypes.object,
    id: PropTypes.string,
    data: PropTypes.shape({
        nameId: PropTypes.string,
        numberId: PropTypes.string,
        familyId: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
        family: PropTypes.bool,
        }),
}