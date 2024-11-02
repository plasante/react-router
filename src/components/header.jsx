import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={'d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'}>
            <Link to="/" className={'d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'}>
                <span className={'fs-4'}>My Logo</span>
            </Link>

            <ul className={'nav nav-pills'}>
                <li className={'nav-item"'}>
                    <NavLink to='/' className={'nav-link'}>Home</NavLink>
                </li>
                <li className={'nav-item"'}>
                    <NavLink className={'nav-link'} to="/posts">Posts</NavLink>
                </li>
                <li className={'nav-item"'}>
                    <NavLink className={'nav-link'} to="/profile">Profile</NavLink>
                </li>
                <li className={'nav-item"'}>
                    <NavLink className={'nav-link'} to="/users">Users</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;