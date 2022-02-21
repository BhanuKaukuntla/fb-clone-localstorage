import React, {useState} from 'react';
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Posts from "./Posts";
import ChatBar from "./ChatBar";
import ChatBox from "./ChatBox";
import { Link } from 'react-router-dom';
import Messenger from './Messenger';
// import MainScreen from "./MainScreen";

const Home = () => {
  const user = localStorage.getItem('userlogined');
    const [state, setState] = useState(false);
  const [current, setCurrent] = useState({});
  const openChat = (user) => {
    setState(true);
    setCurrent(user);
  };
  const closeChat = () => {
    setState(false);
  };
  return (
      <div>
          {/* <Navbar /> */}
            <div className="facebook">
              <SideBar />
              <Posts />
              <ChatBar openChat={openChat} />
              <ChatBox state={state} current={current} closeChat={closeChat} />
            </div>
      </div>
  );
}

export default Home;
