import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between bg-gray-500 text-white items-center">
            <span className="font-bold">Pet-project React 2023</span>

            <span>
                <Link to='/' className="mr-2">Main page</Link >
                <Link to='/about'>About</Link >
            </span>
        </nav>
    )
}