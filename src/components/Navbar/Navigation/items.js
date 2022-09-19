import { nanoid } from 'nanoid';

const items = [
    {
        id: nanoid(),
        to: "/phonebook",
        text: "Phonebook"
    },
    {
        id: nanoid(),
        to: "/family",
        text: "Family"
    },
];

export default items;