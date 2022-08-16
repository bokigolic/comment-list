const CommentItem = (props) => {
  const item = props.item
  return (
    <div className="comment-item">
      <div>
        <span>{item.title}</span>
        <span>{item.comment}</span>
      </div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
export default CommentItem;