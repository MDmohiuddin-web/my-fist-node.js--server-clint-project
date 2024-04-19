import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="w-4/5 m-auto capitalize">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;