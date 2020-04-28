import React from 'react';
import './App.css';
import Header from './Header';
import PostControl from './PostControl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <hr />
        <PostControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
