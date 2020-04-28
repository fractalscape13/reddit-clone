import React from 'react';
import PropTypes from 'prop-types';

function PostForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type='text' name='subject' placeholder='Subject' />
        <textarea type='text' name='content' placeholder='Post content' />
        <input type='text' name='username' placeholder='Your name' />
        <input type='text' name='image' placeholder='Post summed up in one word' />
        <button type='submit'>Submit for Brownies</button>
      </form>
    </React.Fragment>
  )
}

PostForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default PostForm;