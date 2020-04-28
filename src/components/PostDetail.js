import React from 'react';
import PropTypes from "prop-types";

function PostDetail(props){
  const { post, onClickingDelete } = props;
  let url = "http://source.unsplash.com/200x150/?" + post.image;

  return (
    <React.Fragment>
      <div>
        <h1>{post.subject}</h1>
        <p>{post.username} - {post.timestamp}</p>
      </div>
      <div>
        <img src={url} />
      </div>
      <div>
        <p>{post.content}</p>
      </div>
      <div>
        <button onClick={()=> onClickingDelete(post.id)}>Remove Post</button>
          <button onClick={ props.onClickingEdit }>Edit Post</button>
      </div>
    </React.Fragment>
  )
}

PostDetail.propTypes = {
  post: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default PostDetail;