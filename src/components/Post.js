import React from 'react';
import Row from 'react-bootstrap/Row';
// import PropTypes from 'prop-types';

function Post(props){

  let url = "http://source.unsplash.com/200x150/?" + post.image;

  return (
    <React.Fragment>
      <Row>
        <Col md={3}>
          <h3>upvote thingy</h3>
            <h4>{post.brownies}</h4>
          
        </Col>
        <Col md={9}>
          <h3>{props.subject}</h3>
          <p>by {post.username}</p>
          <img src={url} />
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Post;