import React, { useState, useEffect } from "react";
import ShowMsg from "./ShowMsg";
import { FaVideo, FaPhone, FaRegWindowClose } from "react-icons/fa";
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
import ItemMsg from "./ItemMsg";
// import { chatAction } from "../redux/actions/chatAction";
const ChatBox = (props) => {
  const closeChat = () => {
    props.closeChat();
  };
  const getDatafromLS=()=>{
    const data = localStorage.getItem('chats');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }
  const [msg, setMsg] = useState(getDatafromLS());
  const [title, setTitle]=useState('');
  const dispatch = useDispatch()
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let chat={
      // id: uuidv4(),
      title,
      author: localStorage.getItem('userlogined'),
    }
    setMsg([...msg,chat]);
    // setMsg({...msg,chat})
    setTitle('');
    // dispatch(chatAction(msg))
    console.log(chat)
  }
  console.log(msg)
  useEffect(()=>{
    localStorage.setItem('chats',JSON.stringify(msg));
  },[msg])
  return (
    <>
      {props.state ? (
        <div className="chat">
          <div className="chat__header">
            <div className="chat__first">
              {/* <div className="chat__header-img">
                <img
                  src={props.current.image ? props.current.image : ""}
                  alt="user"
                />
              </div> */}
              <div className="chat__header-name">
                {props.current.username ? props.current.username : ""}
              </div>
            </div>
            <div className="chat__second">
              <FaVideo className="chat__header-icons" />
              <FaPhone className="chat__header-icons" />
              <FaRegWindowClose
                className="chat__header-icons"
                onClick={closeChat}
              />
            </div>
          </div>
          <div className="chat__body">
            <div className="chat__left">
              <ShowMsg state={msg}/>
              {/* <ItemMsg state={msg}/> */}
            </div>
            </div>
          {/* <div className="chat__body">
            <div className="chat__left">
              <p className="msg">hai</p>
            </div>
            <div className="chat__right">
              <p className="msg">Lorem, ipsum</p>
            </div>
            <div className="chat__left">
              <p className="msg">
                Lorem, ipsum dolor sit amet lskdjflkj sdfsdf sdf
              </p>
            </div>
            <div className="chat__right">
              <p className="msg">Lorem, ipsum sdd</p>
            </div>
          </div> */}
          <div className="chat__footer">
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <input type="text" className='create__first-inputs' placeholder="Message " required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            {/* <button type="submit" className='btn btn-success btn-md'>
              Post
            </button> */}
          </form>
            {/* <input type="text" className="chat__input" placeholder="Aa" /> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatBox;
