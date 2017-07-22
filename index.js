/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-opbeat',

  included() {
    this._super.included.apply(this, arguments);
    this.import('vendor/moment.js');
    this.import('vendor/shims/moment.js');
  },

  treeForVendor(vendorTree) {
    var momentTree = new Funnel(path.join(this.project.root, 'node_modules', 'opbeat-js'), {
      files: ['opbeat.js'],
    });

    return new MergeTrees([vendorTree, momentTree]);
  },
};
