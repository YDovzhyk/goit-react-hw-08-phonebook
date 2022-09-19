import { useEffect } from "react";
import { useDispatch } from "react-redux";

import UserRoutes from "./UserRoutes";
import Navbar from "./components/Navbar/Navbar";

import { current } from "./redux/auth/auth-operations"
import s from "./components/App.module.css"

function App () {
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(current());
  }, [dispatch]);
  
  return (
    <div className={s.container}>
      <Navbar/>
      <UserRoutes/>
    </div>
  );
}

export default App;
