import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
import PostDetail from './PostDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PostControl extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        formVisibleOnPage: false,
        selectedPost: null,
        editing: false
      };
    }

    //handle methods
    handleClick = () => {
      if (this.state.selectedPost != null) {
        this.this.setState({formVisibleOnPage: false, selectedPost: null, editing: false});
      } else {
        this.setState(prevState => ({
          formVisibleOnPage: !prevState.formVisibleOnPage
        }));
      }
    }

    handleEditClick = () => {
      this.setState({editing: true});
    }

    handleAddingNewPost = (newPost) => {
      const { dispatch } = this.props;
      const { id, subject, content, username, image, brownies, timestamp } = newPost;
      const action = { type: 'ADD_POST', id: id, subject: subject, content: content, username: username, image: image, brownies: brownies, timestamp: timestamp }
      dispatch(action);
      this.setState({formVisibleOnPage: false});
    }

    handleChangingSelectedPost = (id) => {
      const selectedPost = this.props.masterPostList[id];
      this.setState({selectedPost: selectedPost});
    }

    render(){
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = <PostEdit post={this.state.selectedPost} onEditPost={this.handleEditingPost} />
        buttonText = "Return to post list";
      } else if (this.state.selectedPost != null) {
        currentlyVisibleState = <PostDetail post={this.state.selectedPost} onClickingDelete={this.handleDeletingPost} onClickingEdit={this.handleEditClick} />
        buttonText = "Return to post list";
      } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <PostForm onNewPostCreation={this.handleAddingNewPost} />
        buttonText = "Return to post list";
      } else {
        currentlyVisibleState = <PostList postList={this.props.masterPostList} onPostSelection={this.handleChangingSelectedPost} />
        buttonText = "Add a post";
      }

      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;