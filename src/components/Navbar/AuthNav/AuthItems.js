import { nanoid } from 'nanoid';

const AuthItems = [
    {
        id: nanoid(),
        to: "/register",
        text: "Registration"
    },
    {
        id: nanoid(),
        to: "/login",
        text: "Login"
    },
];

export default AuthItems;