twitter-url-parser
==================

Extracts some information from a Twitter status URL.
This currently only gets the status id, but please extend if you need more! :)

Example
-------

```javascript
var parse = require('twitter-url-parser');

var result = parse('https://twitter.com/prhonedev/statuses/315586729463660545?utm_medium=twitter&utm_source=twitterfeed');

console.log(result);

// output: { id: '315586729463660545' }
```

Installation
------------

    npm install twitter-url-parser
