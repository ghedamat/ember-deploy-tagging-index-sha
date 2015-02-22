/* jshint node: true */
'use strict';

var IndexShaAdapter = require('./lib/index-sha');

module.exports = {
  name: 'ember-deploy-tagging-index-sha',
  type: 'ember-deploy-addon',

  adapters: {
    tagging: {
      'index-sha': IndexShaAdapter
    }
  }
};
