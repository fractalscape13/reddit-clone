import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Post(props){
  let url = "http://source.unsplash.com/200x150/?" + props.image;

  const divStyle= {
    width: "80%",
    textAlign: "center"
  }

  const responsiveStyle = {
    width: "100%",
    maxWidth: "200px",
    height: "auto"
  }

  return (
    <React.Fragment>
      <div style={divStyle}>
        <Card>
          <Row>
            <Col md={3}>
              <button onClick = {()=> props.whenUpvoted(props)} type="submit">Upvote</button>
              <button onClick = {()=> props.whenDownvoted(props)} type="submit">Downvote</button>
                <h4>{props.brownies}</h4>
            </Col>
            <Col md={9} className="clickable" onClick={() => props.whenPostClicked(props.id)}>
              <Card.Title><h3>{props.subject}</h3></Card.Title>
              <p>by {props.username}</p>
              <img src={url} alt="randomImage" style={responsiveStyle}/>
            </Col>
          </Row>
        </Card>
      </div>
    </React.Fragment>
  )
}

Post.propTypes = {
  subject: PropTypes.string,
  username: PropTypes.string,
  brownies: PropTypes.number,
  image: PropTypes.string,
  id: PropTypes.string,
  whenPostClicked: PropTypes.func,
  whenUpvoted: PropTypes.func,
  whenDownvoted: PropTypes.func
}

export default Post;