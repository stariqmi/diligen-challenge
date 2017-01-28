import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/js/materialize.js';
import * as _ from 'lodash';
import * as SuperAgent from 'superagent';

import FrequencyTable from './components/frequency_table.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      words: {},
      pairs: {}
    };

    this.handleAnalyzeClick = this.handleAnalyzeClick.bind(this);
  }

  handleAnalyzeClick() {
    let doc = document.querySelector('textarea').value;

    SuperAgent.post('/analytics')
    .send({doc: doc})
    .then(
      (res) => {
        this.setState(res.body);
      },
      (err) => {
        throw new Error(err);
      }
    )

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l12">
            <center><h3 className="title">diligen</h3></center>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12 l12">
            <textarea id="doc" className="materialize-textarea"></textarea>
            <label htmlFor="doc">Document to analyze</label>
          </div>
        </div>

        <div className="row">
          <div className="row col s12 m12 l12">
            <center>
              <a className="waves-effect waves-light btn analyze-button" onClick={this.handleAnalyzeClick}>button</a>
            </center>
          </div>
        </div>

        <div className="row">
          <FrequencyTable type="words" data={this.state.words}/>
          <FrequencyTable type="words" data={this.state.pairs}/>
        </div>
      </div>
    );
  }
}

const mount_point = document.getElementById('app-container');
ReactDOM.render(<App />, mount_point);
