import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import ItemMsg from "./ItemMsg";
const ShowMsg = ({state}) => {
  console.log(state)
  return (
    <div className="show">
      {state.map((post) => (
        <ItemMsg post={post}/>
      ))}
    </div>
  );
};

export default ShowMsg;
