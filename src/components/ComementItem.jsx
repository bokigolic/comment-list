const CommentItem = (props) => {
  const item = props.item
  return (
    <div>
      {item.title}
      {item.comment}
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};
export default CommentItem;