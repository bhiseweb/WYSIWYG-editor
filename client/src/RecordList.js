import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Header from './Header'

class RecordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recordList: []
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_URL}/record/fetchAll`
    return fetch(url, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ recordList: data.recordList })
      });
  }
  
  render() {
    const { recordList } = this.state;
    return (
      <div className="App">
        <Header />
        <ul>
          {recordList.length && recordList.map((record, index) => {
            return (<li className='list' key={index}>
              <a href={record.path}>{record.path}</a>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default RecordList;
