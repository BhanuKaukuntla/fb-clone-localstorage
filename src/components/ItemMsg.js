import React from 'react';

const ItemMsg = ({post}) => {
    console.log(post)
  return (
    <div>
        <div key={post.title} className="empty">
          {/* <div className="show__header"> */}
            
          {/* <div className="show__body"> */}
            <div className="msg">{post.title}</div>
            {/* <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div> */}
            {/* </div> */}
          
          {/* </div> */}
        </div>
    </div>
  );
};

export default ItemMsg;
