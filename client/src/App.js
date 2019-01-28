import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from './Header'
import './App.css';

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class App extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState
    }
  }

  onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState,
    });
  };

  handleSubmit = () => {
    const { contentState } = this.state;
    const url = `${process.env.REACT_APP_URL}/record/send`
    const path = `${window.location.href}records/${Date.now()}`
    const textData = contentState.blocks.map(a => a.text).join()
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: textData,
        path: path  
      })
    })
    .then((response) => {
      // response.json()
      window.location.replace('/records')
    });
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <Editor
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onContentStateChange={this.onContentStateChange}
        />
        <button
          className="button"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default App;
