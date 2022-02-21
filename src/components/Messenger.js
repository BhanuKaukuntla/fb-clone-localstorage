import React, {useState, useEffect} from "react";
import Messages from './Messages';
import { useDispatch, useSelector } from 'react-redux';
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
import Item from "./Item";
import { messageAction } from "../redux/actions/messageAction";

const getDatafromLS=()=>{
    const message = localStorage.getItem('messages');
    if(message){
      return JSON.parse(message);
    }
    else{
      return []
    }
  }

const Messenger = () => {
//   const message = JSON.parse(localStorage.getItem('messages'))
//   let {message} = messages
//   console.log(message)
  let messages = useSelector(state => state.messages)
  let {message} = messages
  console.log(message)
  // const [message, setMessage]=useState(getDatafromLS());
  const [title, setTitle]=useState('');

  const dispatch = useDispatch()

  const handleAddpostsubmit=(e)=>{
    e.preventDefault();
    let newMessage={
      // id: uuidv4(),
      title,
      author: localStorage.getItem('userlogined'),
    }
    // setMessage([...message,newMessage])
    message = [...message,newMessage]
    setTitle('');
    dispatch(messageAction(message))
    // localStorage.setItem('messages',JSON.stringify(message))
  }
  // useEffect(()=>{
  //   dispatch(messageAction(message))
  // },[dispatch])
  return (
    <div className="messenger">
      {/* <div className="create__second">
        <span className="create__second-icon">
          <FaVideo className="redColor" />{" "}
          <span className="text">Live Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegFileImage className="greenColor" />{" "}
          <span className="text">Photo / Video</span>
        </span>
        <span className="create__second-icon">
          <FaRegGrinAlt className="orangeColor" />{" "}
          <span className="text">Feeling</span>
        </span>
      </div> */}
      <Messages state={message}/>
      <div className="search-bar">
        <div className="messages-name">
          <form autoComplete="off" className='form-groups'
          onSubmit={handleAddpostsubmit}>
            <input type="text" className='form-input' placeholder="Message " required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
