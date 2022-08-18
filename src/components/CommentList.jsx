import { useState } from "react";
import CommentItem from "./ComementItem";
const CommentList = ()=>{
const data = [
  {
    id:1,
    title: "A",
    comment: "aaa"
  },
  {
    id:2,
    title: "B",
    comment: "bbb"
  },
  {
    id:3,
    title: "C",
    comment: "ccc"
  }
]

const [comments, setComments] = useState(data)

return (
    <div>
<h1>Comment List</h1>
<div className='comment-list'>
  {
    comments.map(item =>{
      return(
      <CommentItem key={item.id} item={item}/>
       )
    })
  }
</div>
    </div>
    );
};
export default CommentList;