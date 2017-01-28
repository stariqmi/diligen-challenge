import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/js/materialize.js';
import * as _ from 'lodash';
import * as SuperAgent from 'superagent';

import FrequencyTable from './components/frequency_table.js';
import AnalyzedText from './components/analyzed_text.js'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      analytics: {
        words: {},
        pairs: {}
      },
      doc: [],
      highlighted: []
    };

    this.handleAnalyzeClick = this.handleAnalyzeClick.bind(this);
  }

  highlightWord(word, highlight) {
    let highlighted = _.uniq(this.state.highlighted)

    if (highlight == 0) { // Remove highlight
      this.setState({highlighted: _.pull(highlighted, word)});
    }
    else {
      highlighted.push(word);
      this.setState({highlighted: highlighted});
    }
  }

  handleAnalyzeClick() {
    let doc = document.querySelector('textarea').value;

    SuperAgent.post('/analytics')
    .send({doc: doc})
    .then(
      (res) => {
        this.setState({doc: doc.split('\n'), analytics: res.body});
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
              <a className="waves-effect waves-light btn analyze-button" onClick={this.handleAnalyzeClick}>Analyze Document</a>
            </center>
          </div>
        </div>

        <AnalyzedText doc={this.state.doc} highlighted={this.state.highlighted}/>

        <div className="row">
          <FrequencyTable type="words" data={this.state.analytics.words} highlightWord={this.highlightWord.bind(this)} />
          <FrequencyTable type="words" data={this.state.analytics.pairs} highlightWord={this.highlightWord.bind(this)} />
        </div>
      </div>
    );
  }
}

const mount_point = document.getElementById('app-container');
ReactDOM.render(<App />, mount_point);
