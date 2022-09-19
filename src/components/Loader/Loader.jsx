import { RotatingLines } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
    return (
    <RotatingLines
        strokeColor="rgb(34, 88, 88)"
        strokeWidth="5"
        animationDuration="3"
        width="40"
        visible={true}
        />
    )
};

export default Loader;
