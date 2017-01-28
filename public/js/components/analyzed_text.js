import React from 'react';

class AnalyzedText extends React.Component {
  constructor() {
    super();
  }

  render() {
    let doc = [];

    for (let line in this.props.doc) {
      doc.push(<p key={line} className="regular-text">{this.props.doc[line]}</p>);
    }

    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <p className="title-sec">Analyzed Document</p>
        </div>
        <div className="col s12 m12 l12">
          {doc}
        </div>
      </div>
    )
  }
}

export default AnalyzedText;
