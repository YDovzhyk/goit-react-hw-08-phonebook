import { useSelector } from "react-redux";
import { getFamilyContacts } from "../../redux/contacts/items/items-selectors"

import PropTypes from 'prop-types';
import s from "./Family.module.css"

const Family = () => {
    const contacts = useSelector(getFamilyContacts);
    
    const elements = contacts.map(({id, name, number}) => (
        <li key={id} className={s.items}>
            {name}: {number}
        </li>
    ))

    return (
        <div className={s.container}>
            <div className={s.familyBlock}>
            <h2 className={s.title}>My family contacts:</h2>
            <ol className={s.familyBlockList}>
                {elements}
            </ol>
            </div>
        </div>
    )
}

export default Family;

Family.defaultProps = {
    id: "",
    name: "",
    number: "",
}

Family.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
}