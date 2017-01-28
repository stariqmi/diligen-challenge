# diligen-challenge
Diligen Application Challenge

### Server
The application server is written in Node (es6).

### Client
The UI is written in **React** (es6) and [MaterializeCSS](http://materializecss.com/). To make development quicker I used **lodash**, a faster replacement for underscore.js. Ideally I prefer not to use jQuery but for MaterializeCSS, it had to be included. However, the React components do not rely on jQuery.

### Heroku Application
https://limitless-earth-83903.herokuapp.com/

### Tasks
- Analyze document and render N word frequencies and N word pair frequencies
- **Bonus** JSON API endpoint for analyzing document
```
POST /analytics
{
    "doc": "diligen application\ndiligen fullstack challenge"
}

RESPONSE
{
  "words": {
    "diligen": 2,
    "application": 1,
    "fullstack": 1,
    "challenge": 1
  },
  "pairs": {
    "diligen application": 1,
    "diligen fullstack": 1,
    "fullstack challenge": 1
  }
}

```
- Sorting results
- Highlighting results

### Improvements after submission
- Changing color of the word that is highlighted in the table

### Bugs
- Adding "  " i.e 2 or more whitespace characters will be recognized as a word. **Fixed** `replace(/\s\s+/, '')`
- In case a single word is highlighted, the pair including the single word is not highlighted. **Fixed**  
- UX: Icon for sorting action missing, clicking on column header works but is not a good UX
