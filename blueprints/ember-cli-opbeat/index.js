/*jshint node:true*/

module.exports = {
  description: 'Adds opbeat-js Bower package',
  
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackageToProject('opbeat-js');
  }
};
