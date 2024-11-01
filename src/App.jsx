import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/home.jsx";
import Posts from "./components/posts.jsx";
import Profile from "./components/profile.jsx";
import PostItem from "./components/postItem.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <header className={'d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'}>
                    <Link to="/" className={'d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'}>
                        <span className={'fs-4'}>My Logo</span>
                    </Link>

                    <ul className={'nav nav-pills'}>
                        <li className={'nav-item"'}>
                            <Link className={'nav-link'} to="/">Home</Link>
                        </li>
                        <li className={'nav-item"'}>
                            <Link className={'nav-link'} to="/posts">Posts</Link>
                        </li>
                        <li className={'nav-item"'}>
                            <Link className={'nav-link'} to="/profile">Profile</Link>
                        </li>
                    </ul>
                </header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/posts/:id/:name" element={<PostItem />}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;