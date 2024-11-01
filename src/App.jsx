import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/home.jsx";
import Posts from "./components/posts.jsx";
import Profile from "./components/profile.jsx";
import PostItem from "./components/postItem.jsx";
import Header from "./components/header.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
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