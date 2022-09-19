const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getStateError = state => state.auth.error;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getStateError,
}

export default authSelectors;
