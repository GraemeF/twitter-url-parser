var url = require('url');

const statusIdRegex = /\/status(es)?\/(\d+)/;

module.exports = function getStatusId(uri) {
  var parsed = url.parse(uri);

  if (parsed.host !== 'twitter.com') {
    return null;
  }

  if (parsed.path.indexOf('status') === -1) {
    return null;
  }

  var match = statusIdRegex.exec(parsed.path);
  if (match === null) {
    return null;
  }

  return {
    id: match[2]
  };
}
