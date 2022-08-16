const CommentItem = (props) => {
  const item = props.item
  return (
    <div>
      {item.title}
      {item.comment}
    </div>
  );
};
export default CommentItem;