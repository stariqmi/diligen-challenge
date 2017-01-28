# diligen-challenge
Diligen Application Challenge

### Server
The application server is written in Node (es6).

### Client
The UI is written in React(es6) and MaterializeCSS. To make development quicker I used **lodash**, a faster replacement for underscore.js. Ideally I prefer not to use jQuery but for MaterializeCSS, it had to be included. However, the React components do not rely on jQuery.

### Heroku Application
https://limitless-earth-83903.herokuapp.com/

### Tasks
- Analyze document and render N word frequencies and N word pair frequencies
- **Bonus** JSON API endpoint for analyzing document
```
POST /analytics
{
    doc: "diligen application\n diligen fullstack challenge"
}
```
- Sorting results
- Highlighting results
