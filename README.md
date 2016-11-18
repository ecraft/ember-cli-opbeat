[![npm version](https://badge.fury.io/js/ember-cli-opbeat.svg)](https://badge.fury.io/js/ember-cli-opbeat)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-opbeat.svg)](https://emberobserver.com/addons/ember-cli-opbeat)
[![Dependency Status](https://david-dm.org/ecraft/ember-cli-opbeat.svg)](https://david-dm.org/ecraft/ember-cli-opbeat)
[![devDependency Status](https://david-dm.org/ecraft/ember-cli-opbeat/dev-status.svg)](https://david-dm.org/ecraft/ember-cli-opbeat?type=dev)

# ember-cli-opbeat

An [opbeat-js](https://opbeat.com/docs/articles/get-started-with-javascript/) Ember shim.

This very small Ember Addon allows you to place configuration in your `environment.js` ENV.APP section, and have it hook up `Ember.onerror` and `window.onerror` to also report exceptions to [Opbeat](https://opbeat.com).

## Usage in your app

- `ember install ember-cli-opbeat`
- Configure your application's ENV.APP section in  `environment.js`: add `opbeat: { appId: 'your-app-id', orgId: 'your-org-id' }`
