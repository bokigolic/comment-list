import { useState } from "react";

const CommentItem = (props) => {
  const item = props.item

  const [editMode, setEditMode] = useState(false);

  let jsx = (
      <div>
        <span>{item.title}</span>
        <span>{item.comment}</span>
        <button onClick={()=>{setEditMode(true)}}>Edit</button>
        <button>Delete</button>
      </div>
       );

       if(editMode){
        jsx = (
          <div>
            <input value={item.title}></input>
            <input value={item.comment}></input>
            <button>Save</button>
        <button onClick={()=>{setEditMode(false)}}>Cancel</button>
          </div>
        )
       }
  

  return (
    <div className="comment-item">
      {jsx}
    </div>
  )
};
export default CommentItem;