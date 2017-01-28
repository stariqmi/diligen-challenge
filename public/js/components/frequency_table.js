import React from 'react';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

class FrequencyTable extends React.Component {
  constructor() {
    super();
  }

  render() {
    let data = this.props.data;
    let rows = [];
    for (let word in data) {
      rows.push(
        <tr key={word}>
          <td>{word}</td>
          <td>{data[word]}</td>
        </tr>
      );
    }

    return (
      <div className="col s12 m6 l6">
        <table className="centered">
          <thead>
            <tr>
                <th data-field={this.props.type}>{capitalize(this.props.type)}</th>
                <th data-field="frequency">Frequency</th>
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
