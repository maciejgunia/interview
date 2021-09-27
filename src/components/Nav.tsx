import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
            <li>
                <Link to="/fetch">Fetch</Link>
            </li>
        </ul>
    );
};
