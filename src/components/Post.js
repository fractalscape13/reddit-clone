import React from 'react';
import Row from 'react-bootstrap/Row';
// import PropTypes from 'prop-types';

function Post(props){
  return (
    <React.Fragment>
      <Row>
        <Col md={3}>
          <h3>upvote thingy</h3>
            <h4>{post.brownies}</h4>
          
        </Col>
        <Col md={9}>
          <p>{props.subject}</p>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Post;