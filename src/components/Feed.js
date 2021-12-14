import React,{useState} from "react";
import FeedOption from "../FeedOption";

import "./Feed.css";


function Feed() {
 const [text, setText] = useState('')

 const handleCallback = (data) =>{
  setText(data)
}


  return (
    <div className="feed">
      here:{text}

     
      <FeedOption firstCallback = {handleCallback}/>
   
    </div>
  );
}

export default Feed;