import PropTypes from 'prop-types';
import ContactListItem from "./ContactListItem"
import s from "./contactList.module.css"

const ContactList = ({items, removeContact}) => {
    const elements = items.map(item => <ContactListItem key={item.id} {...item} removeContact={removeContact} />);

    return (<>
        <h4 className={s.title}>Contacts list:</h4>
        <ol>
            {elements}
        </ol>
    </>
    )
}
export default ContactList;

ContactList.defaultProps = {
    items: [],
    removeContact: () => {},
}

ContactList.propTypes = {
    removeContact: PropTypes.func,
    items: PropTypes.arrayOf(PropTypes.shape({
        nameId: PropTypes.string,
        numberId: PropTypes.string,
        familyId: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
        family: PropTypes.bool,
        id: PropTypes.string,
        })
    ),
}