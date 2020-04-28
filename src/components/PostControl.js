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

      };
    }

    //handle methods


    render(){
      return (
        <React.Fragment>

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