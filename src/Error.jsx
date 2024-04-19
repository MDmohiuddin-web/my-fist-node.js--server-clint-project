import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className=" text-center items-center">
            <h3>this is error page </h3>
            <h3>data not found </h3>
            <Link to='/'> back to home</Link>
            
        </div>
    );
};

export default Error;