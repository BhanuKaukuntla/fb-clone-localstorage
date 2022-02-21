import React from 'react';
import Item from "./Item";

const Messages = ({state}) => {
  console.log(state)
  return (
    <div className="messages">
      {state.map((post) => (
        <div key={post.id} className="empty">
        <div className="message-box">
          <div className="message-author">
            {post.author} 
          </div>
          <div className="message-body">
            <div className="show__body-text">{post.title}</div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Messages;
