function removeNonWordChars(doc) {
  let cleaned = doc.replace(/[^a-zA-Z\s\n]/g, '').replace(/\s\s+/g, ' ');
  
  return cleaned;
}

function getWordFrequency(doc) {
  let analytics = {};
  let lines = removeNonWordChars(doc).split('\n');

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

function getWordPairFrequency(doc) {
  let analytics = {};
  let lines = removeNonWordChars(doc).split('\n');

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

module.exports = {
  getWordFrequency: getWordFrequency,
  getWordPairFrequency: getWordPairFrequency
}
