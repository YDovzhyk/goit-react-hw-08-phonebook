import { useSelector } from "react-redux";

import authSelectors from "../../redux/auth/auth-selectors";

const useAuth = () => {
    const result = useSelector(authSelectors.getIsLoggedIn);
    return result;
}

export default useAuth;