import React from 'react';

class AnalyzedText extends React.Component {
  constructor() {
    super();
  }

  createDangerousInnerHTML(innerHTML) {
    return {
      __html: innerHTML
    }
  }

  render() {
    let lines = [];
    let doc = this.props.doc;

    // Takes care of overlapping scenario
    let highlighted = _.sortBy(this.props.highlighted, (word) => {
      return word.split(' ').length;
    });

    _.reverse(highlighted);

    for (let l in doc) {
      let line = doc[l]

      for (let h in highlighted) {
        line = line.replace(highlighted[h], `<span class="highlighted">${highlighted[h]}</span>`);
      }

      lines.push(line);
    }

    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <h5 className="title-sec">Analyzed Document</h5>
        </div>
        <div className="col s12 m12 l12 regular-text">
          <p dangerouslySetInnerHTML={this.createDangerousInnerHTML(lines.join('<br/>'))}></p>
        </div>
      </div>
    )
  }
}

export default AnalyzedText;
