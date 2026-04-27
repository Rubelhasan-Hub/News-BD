import { BsGoogle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const RightSizeBar = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-semibold">Login With</h1>
            <div className="flex flex-col gap-3">
            <button className="btn border-blue-500 text-blue-500"><BsGoogle/>Login With Facebook</button>
            <button className="btn"><FaGithub/>Login With Github</button>
            </div>
        </div>
    );
};

export default RightSizeBar;