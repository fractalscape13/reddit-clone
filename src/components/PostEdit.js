import React from 'react';
import PostForm from './PostForm';
import PropTypes from 'prop-types';

function EditPostForm(props) {
  const { post } = props;

  function handleEditPostSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      subject: event.target.subject.value, 
      content: event.target.content.value, 
      username: post.username, 
      image: post.image, 
      brownies: post.brownies,
      timestamp: post.timestamp,
      id: post.id});
  }

  return (
    <React.Fragment>
      <PostForm
        formSubmissionHandler={handleEditPostSubmission}
        buttonText="Regret my Words" />
    </React.Fragment>
  )
}

EditPostForm.propTypes = {
  onEditPost: PropTypes.func
}

export default EditPostForm;