import React from 'react';
import { v4 } from 'uuid';
// import PropTypes from 'prop-types';
import PostForm from './PostForm';

function NewPostForm(props) {
  
  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      subject: event.target.subject.value, 
      content: event.target.content.value, 
      username: event.target.username.value, 
      image: event.target.image.value, 
      brownies: 0,
      timestamp: Date.now(),
      id: v4()});
  }
  return (
    <React.Fragment>
      <PostForm
        formSubmissionHandler={handleNewPostSubmission}
        buttonText="Submit for Brownies" />
    </React.Fragment>
  )
}

PostCreate.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPostForm;