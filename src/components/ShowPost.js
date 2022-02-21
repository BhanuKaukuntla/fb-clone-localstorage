import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import {likePost} from '../redux/actions/postAction'
import { v4 as uuidv4 } from 'uuid';
import Item from "./Item";
const ShowPost = ({state}) => {
  

  // let post = state.map((post) => post)
  // // console.log(post)
  // const [like, setLike] = useState(0);
  // const [isLiked, setIsLiked] = useState(false);
  // const user = localStorage.getItem('userlogined')
  // useEffect(() => {
  //   setIsLiked(post.id);
  // }, [user, post.id]);
  // const likeHandler = () => {
  //   setLike(isLiked ? like - 1 : like + 1);
  //   setIsLiked(!isLiked);
  // };
  console.log("data",state)
  return (
    <div className="show">
      {state.reverse().map((post) => (
        <Item post={post}/>
        // <div key={post.id} className="empty">
        //   <div className="show__header">
        //     {/* <div className="show__header-img">
        //       <img src={post.userImg} alt="user" />
        //     </div> */}
        //     <div className="show__header-name">
        //       {post.author} <div className="date">{post.author}</div>
        //     </div>
        //   </div>
        //   {/* <button className='delete-btn' onClick={()=>deleteBook(post.title)}>
        //         d
        //     </button>    */}
        //   <div className="show__body">
        //     <div className="show__body-text">{post.title}</div>
        //     {/* <div className="show__body-img">
        //       <img src={post.postImg} alt="post" />
        //     </div> */}
        //   </div>
          
        //   <div className="show__reactions">
        //     <span className="reactions">
        //       <FaRegThumbsUp  /> <span className="reactions-text"> Likes</span>
        //     </span> 
        //     {/* <span className="postLikeCounter">{like} people like it</span> */}
        //     <span className="reactions">
        //       <FaRegCommentAlt />{" "}
        //       <span className="reactions-text">Comments</span>
        //     </span>
        //     <span className="reactions">
        //       <FaShareAlt /> <span className="reactions-text">Share</span>
        //     </span>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default ShowPost;
