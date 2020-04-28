import React from 'react';
import Post from './Post';
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment> 
      {Object.values(props.postList).map((post) => {
        return <Post
          subject={post.subject}
          content={post.content}
          username={post.username}
          image={post.image}
          brownies={post.brownies}
          timestamp={post.timestamp}
          id={post.id}
          key={post.id}
          whenPostClicked={props.onPostSelection}
          whenUpvoted={props.onUpvote}
          whenDownvoted={props.onDownvote} />
          
      })}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func, 
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
};

export default PostList;