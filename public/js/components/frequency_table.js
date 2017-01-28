import React from 'react';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class FrequencyTable extends React.Component {
  constructor() {
    super();

    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleWordClick = this.handleWordClick.bind(this);

    this.state = {
      sort: 0
    }
  }

  handleSortClick() {
    this.setState({sort: (this.state.sort == 0 ? 1 : 0)});
  }

  handleWordClick(e) {
    let word = e.target.innerHTML;
    let highlighted = e.target.dataset.highlighted == 0 ? 1 : 0;
    e.target.dataset.highlighted = highlighted;
    this.props.highlightWord(word, highlighted);
  }

  render() {

    let data = this.props.data;
    let rows = [];

    for (let word in data) {
      rows.push(
        <tr key={word}>
          <td onClick={this.handleWordClick} className="word" data-highlighted="0">{word}</td>
          <td>{data[word]}</td>
        </tr>
      );
    }

    return (
      <div className="col s12 m6 l6">
        <table>
          <thead>
            <tr>
                <th data-field={this.props.type}>{capitalize(this.props.type)}</th>
                <th data-field="frequency" className="frequency" onClick={this.handleSortClick}>Frequency</th>
            </tr>
          </thead>

          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}


export default FrequencyTable;
