import './bootstrap.min.css.map';
import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import Main from './Pages/Main';
import AllBlogs from './Pages/AllBlogs';
import Login from './Pages/Login';
import CreatePost from './Pages/CreatePost';
import MyBlogs from './Pages/MyBlogs';
import { signOut } from 'firebase/auth';
import { auth } from './firebase_cofig';
import logo from './images/logo.png';
function App() {
  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));

  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
    });
  };
  return (
    <div className="App">
      
      <BrowserRouter>
      <nav className="justify-content-between navbar pt-2 pb-2 sticky">
        <div>
        <Link to="/" className="text-light text-decoration-none ms-5 navbar-brand"><strong>
          <img src={logo} alt="" width="25px" height="25px" className='me-1'></img>
          WeGrow</strong></Link>
        </div>

        <div>
        <Link to="/" className="text-light text-decoration-none nav-item me-3">Home</Link>
        <Link to="/AllBlogs" className="text-light text-decoration-none me-3 nav-item">All Blogs</Link>
        

        {!isAuth ?(
          <Link to="/login" className="text-light text-decoration-none me-5 nav-item">Login</Link>) :(
          <> 
          <Link to="/createPost" className="text-light text-decoration-none me-3 nav-item"> Create Post</Link>
          <Link to="/myBlogs" className="text-light text-decoration-none me-3 nav-item">My Blogs</Link>
          <button onClick={signUserOut}  className="text-light text-decoration-none me-5 ms-0 btn nav-item">Logout</button>
          </>
        ) }
        
        </div>
      
      
      </nav>
      <Routes >
        <Route path="/" element={<Main setIsAuth={setIsAuth}/>}/>
        <Route path="/AllBlogs" element={<AllBlogs setIsAuth={setIsAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="/createPost" element={<CreatePost setIsAuth={setIsAuth}/>}/>
        <Route path="/myBlogs" element={<MyBlogs setIsAuth={setIsAuth}/>}/>
        
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
