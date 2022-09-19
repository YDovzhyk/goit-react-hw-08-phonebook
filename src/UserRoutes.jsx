import {Routes, Route} from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";

import Loader from "components/Loader/Loader";

const Home = lazy(() => import('./pages/Home/Home'));
const PhonebookPage = lazy(() => import('./pages/Phonebook/PhonebookPage'));
const Family = lazy(() => import('./pages/Family/Family'));
const Register = lazy(() => import('./pages/Register/Register'));
const Login = lazy(() => import('./pages/Login/Login'));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/goit-react-hw-08-phonebook" element={<Home />} />
                <Route element={<PrivateRoute />} >
                    <Route path="/phonebook" element={<PhonebookPage />} />
                    <Route path="/family" element={<Family />} />
                </Route>
                <Route element={<PublicRoute />} >
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;