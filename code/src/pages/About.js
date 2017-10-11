import React, { Component } from 'react';
import MarkdownContent from '../components/MarkdownContent';

class Home extends Component {

  render() {
    return (
      <MarkdownContent file={'about'} />
    );
  }

}

export default Home;
