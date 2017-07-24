/*eslint node:true*/
module.exports = {
  description: 'Adds opbeat-js library',
  init() {
    this._super.init && this._super.init.apply(this, arguments);

    var bowerDeps = this.project.bowerDependencies();

    if (bowerDeps['pouchdb']) {this.ui.writeWarnLine('Please remove `opbeat-js` from `bower.json`. Bower is deprecated and only the NPM package is needed.');}
  },

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    this.addPackageToProject('opbeat-js');
  }
};
