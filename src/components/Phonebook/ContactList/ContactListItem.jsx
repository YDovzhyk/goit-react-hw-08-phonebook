import {memo} from "react";
import PropTypes from 'prop-types';

import s from "./contactList.module.css"

const ContactListItem = ({id, name, number, removeContact}) => {
    return (
        <li className={s.phonebookListItem}>
            {name}: {number}
            <button className={s.phonebookListButton} type='button' onClick={() => removeContact(id)}>Delete</button>
        </li>
    )
}

export default memo(ContactListItem);

ContactListItem.defaultProps = {
    id: "",
    name: "",
    number: "",
    removeContact: () => {},
}

ContactListItem.propTypes = {
    removeContact: PropTypes.func,
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
}