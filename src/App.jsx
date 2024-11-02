import { BrowserRouter, Routes, Route, HashRouter, MemoryRouter, Navigate } from 'react-router-dom';

import Home from "./components/home.jsx";
import Posts from "./components/posts.jsx";
import Profile from "./components/profile.jsx";
import PostItem from "./components/postItem.jsx";
import Header from "./components/header.jsx";

import Users from "./components/users.jsx";
import Admins from "./components/admins.jsx";
import Guests from "./components/guests.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/posts/:id" element={<PostItem />}/>
                    <Route path="/posts/:id/:name" element={<PostItem />}/>
                    <Route path="/postsItem" element={<PostItem />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/" element={<Home />}/>
                    {/*<Route path="/profile" element={*/}
                    {/*    <>*/}
                    {/*        <Navigate replace to={'/'}/>*/}
                    {/*    </>*/}
                    {/*}/>*/}
                    <Route path={'users'} element={<Users />}>
                        <Route path={'guests'} element={<Guests />}/>
                        <Route path={'admins'} element={<Admins />}/>
                    </Route>
                    <Route path={'*'} element={
                        <>
                            <h1>Sorry nothing found.</h1>
                        </>
                    }/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;