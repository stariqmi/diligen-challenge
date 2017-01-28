function cleanDoc(doc) {
  let clean_lines = doc.replace(/\n\n+/g, '\n');
  let cleaned = clean_lines.replace(/[^a-zA-Z\s\n]/g, '')
  let lines = cleaned.split('\n')

  return lines.map((line) => {
    return line.replace(/\s\s+/g, ' ').trim();
  });
}

function getWordFrequency(lines) {
  let analytics = {};

  for (let i in lines) {
    let line = lines[i];
    let words = line.split(' ');

    for (let w in words) {
      let word = words[w];
      analytics[word] = analytics[word] === undefined ? 1 : (analytics[word] + 1);
    }
  }

  return analytics;
}

function getWordPairFrequency(lines) {
  let analytics = {};


  for (let i in lines) {
    let line = lines[i];
    let words = line.split(' ');

    for (let w = 0; w < words.length; w++) {
      if (w == (words.length - 1)) break;

      let pair = `${words[w]} ${words[w+1]}`;
      analytics[pair] = analytics[pair] === undefined ? 1 : (analytics[pair] + 1);
    }
  }

  return analytics;
}

function analyze(doc) {
  let lines = cleanDoc(doc);
  
  return {
    analytics: {
      pairs: getWordPairFrequency(lines),
      words: getWordFrequency(lines)
    },
    doc: lines
  }
}

module.exports = analyze
