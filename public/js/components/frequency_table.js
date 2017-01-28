import React from 'react';
import * as _ from 'lodash';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class FrequencyTable extends React.Component {
  constructor() {
    super();

    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleWordClick = this.handleWordClick.bind(this);

    this.state = {
      sort: {
        type: 'data',
        asc: 0
      }
    }
  }

  handleSortClick(e) {
    let sort_type = e.target.id.split('-')[1];
    this.setState({
      sort: {
        asc: (this.state.sort.asc == 0 ? 1 : 0),
        type: sort_type
      }
    });
  }

  handleWordClick(e) {
    let word = e.target.innerHTML;
    let highlighted = e.target.dataset.highlighted == 0 ? 1 : 0;
    e.target.dataset.highlighted = highlighted;
    this.props.highlightWord(word, highlighted);
  }

  render() {

    let data = this.props.data;
    let sortable_data = _.map(data, (v, k) => {
      return {key: k, value: v}
    });

    let sorted_data = [];
    if (this.state.sort.type === 'data') {
      sorted_data = _.sortBy(sortable_data, 'key');
    }
    else {
      sorted_data = _.sortBy(sortable_data, 'value');
    }

    if (this.state.sort.asc == '0') _.reverse(sorted_data);

    let rows = [];

    for (let word in sorted_data) {
      rows.push(
        <tr key={word}>
          <td onClick={this.handleWordClick} className="word" data-highlighted="0">{sorted_data[word].key}</td>
          <td>{sorted_data[word].value}</td>
        </tr>
      );
    }

    return (
      <div className="col s12 m6 l6">
        <table>
          <thead className="title">
            <tr>
                <th data-field={this.props.type} className="sortable" id={this.props.type +'-data-col'} onClick={this.handleSortClick}>{capitalize(this.props.type)}</th>
                <th data-field="frequency" className="sortable" id={this.props.type + '-frequency-col'} onClick={this.handleSortClick}>Frequency</th>
            </tr>
          </thead>

          <tbody className="regular-text-sec">
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}


export default FrequencyTable;
