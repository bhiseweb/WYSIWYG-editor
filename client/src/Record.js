import React, { Component } from 'react';
import Header from './Header'

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    const path = window.location.href;
    const url = `${process.env.REACT_APP_URL}/record/fetch?path=${path}`
    return fetch(url, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ content: data.record[0].content })
      });
  }
  
  render() {
    const { content } = this.state;
    return (
      <div className="App">
        <Header />
        <textarea
          rows={10}
          cols={100}
          disabled
          value={content}
        />
      </div>
    );
  }
}

export default Record;
