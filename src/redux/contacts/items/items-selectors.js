export const getContacts = ({contacts}) => contacts.items;
export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});
export const getFamilyContacts = ({contacts}) => contacts.items.filter(({family}) => family);

export const getFilteredContacts = ({contacts, filter}) => {
    if(!filter) {
        return contacts.items;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({name, number}) => {
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();
        return (normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter));
    });

    return result;
}
