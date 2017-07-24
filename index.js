/* jshint node: true */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-opbeat',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/opbeat.js');
  },

  treeForVendor(vendorTree) {
    var opbeatTree = new Funnel(path.join(this.project.root, 'node_modules', 'opbeat-js'), {
      files: ['opbeat.js'],
    });

    return new MergeTrees([vendorTree, opbeatTree]);
  },
};
