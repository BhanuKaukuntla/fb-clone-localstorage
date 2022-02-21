import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Posts from "./components/Posts";
import ChatBar from "./components/ChatBar";
import ChatBox from "./components/ChatBox";
import MainScreen from "./components/MainScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
  Link,
} from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Messenger from "./components/Messenger";

function App() {
  const [state, setState] = React.useState(false);
  const [current, setCurrent] = React.useState({});
  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };
  const closeChat = () => {
    setState(false);
  };
  const user = localStorage.getItem('userlogined');
  return (
    <div className="App">
      {/* {user ? (
        <div>
          <Navbar />
          <div className="facebook">
            <SideBar />
            <Posts />
            <ChatBar openChat={openChat} />
            <ChatBox state={state} current={current} closeChat={closeChat} />
          </div>
      </div>
        <Home/>
      ): (
        <Signup/>
      )} */}
      <Router>
        {/* <div>
            {user ? (
              <div>
            <div>
              <Navbar />
              <div className="facebook">
                <SideBar />
                <Posts />
                <ChatBar openChat={openChat} />
                <ChatBox state={state} current={current} closeChat={closeChat} />
              </div>
          </div>
            <Home/>
            </div>
          ): (
            <Login/>
          )}
        </div> */}
      {/* {user ? (
        <Home/>
      ): (
        <Login/>
      )} */}
          {
            user ? (<Link to="/"></Link>) : (<Link to="/login"></Link>)
          }
          <Navbar/>
          {/* <SideBar /> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/messenger" element={<Messenger/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
