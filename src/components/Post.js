import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Post(props){
  let url = "http://source.unsplash.com/200x150/?" + props.image;

  const divStyle= {
    width: "80%",
    textAlign: "center",
    position: "relative"
  }

  const responsiveStyle = {
    width: "100%",
    maxWidth: "200px",
    height: "auto"
  }

  const voteStyle = {
    // margin: "auto",
    // // position: "absolute",
    // // top: "50%",
    // left: "30%",

  }

  return (
    <React.Fragment>
      <div >
        <Card>
          <Row style={divStyle}>
            <Col style={voteStyle} md={2}>
              <button onClick = {()=> props.whenUpvoted(props)} type="submit">Upvote</button>
              <button onClick = {()=> props.whenDownvoted(props)} type="submit">Downvote</button>
                <h4>{props.brownies}</h4>
            </Col>
            <Col md={10}>
              <Card.Title className="clickable" onClick={() => props.whenPostClicked(props.id)}><h3>{props.subject}</h3></Card.Title>
              <p>by {props.username}</p>
              <img  className="clickable" onClick={() => props.whenPostClicked(props.id)} src={url} alt="randomImage" style={responsiveStyle}/>
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