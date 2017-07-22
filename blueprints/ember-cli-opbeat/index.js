/*jshint node:true*/
const rsvp = require('rsvp'),
      fs = require('fs');
module.exports = {
  description: 'Adds opbeat-js library',

  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return this.removePackageFromBowerJSON('opbeat-js')
      .then(this.addPackageToProject('opbeat-js'))
  },

  removePackageFromBowerJSON(dependency) {
    return new rsvp.Promise(function(resolve, reject) {
      try {
        let bowerJSONPath = 'bower.json';
        let bowerJSON = fs.readJsonSync(bowerJSONPath);

        delete bowerJSON.dependencies[dependency];

        fs.writeJsonSync(bowerJSONPath, bowerJSON);

        resolve();
      } catch(error) {
        // resolve if bower.json doesn't exist
        if (error.code == 'ENOENT') {
          resolve();
        }
        reject(error);
      }
  });
},
};
