import { useState } from "react";
import CommentItem from "./CommentItem";
const CommentList = () => {
  
  const data = [
    {
      id: 1,
      title: "A",
      comment: "aaa"
    },
    {
      id: 2,
      title: "B",
      comment: "bbb"
    },
    {
      id: 3,
      title: "C",
      comment: "ccc"
    }
  ]

  const [comments, setComments] = useState(data)

  const deleteItem = (id) => {
    const updatedComments = comments.filter(item => {
      if (item.id === id) {
        return false;
      }
      return true;
    })
    setComments(updatedComments)
  }

  return (
    <div>
      <h1>Comment List</h1>
      <div className='comment-list'>
        {
          comments.map(item => {
            return (
              <CommentItem key={item.id} item={item}
                deleteComent={deleteItem} />
            )
          })
        }
      </div>
    </div>
  );
};
export default CommentList;