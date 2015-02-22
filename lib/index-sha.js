var CoreObject = require('core-object');
var fs         = require('fs');
var crypto     = require('crypto');

module.exports = CoreObject.extend({
  createTag: function() {
    var contents = fs.readFileSync('dist/index.html');
    var shasum = crypto.createHash('sha1');
    shasum.update(contents);
    var file_digest = shasum.digest('hex').slice(0,7);
    return file_digest;
  }
});