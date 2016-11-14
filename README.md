[![npm version](https://badge.fury.io/js/ember-cli-opbeat.svg)](https://badge.fury.io/js/ember-cli-opbeat)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-opbeat.svg)](https://emberobserver.com/addons/ember-cli-opbeat)
[![Dependency Status](https://david-dm.org/ecraft/ember-cli-opbeat.svg)](https://david-dm.org/ecraft/ember-cli-opbeat)
[![devDependency Status](https://david-dm.org/ecraft/ember-cli-opbeat/dev-status.svg)](https://david-dm.org/ecraft/ember-cli-opbeat?type=dev)


# ember-cli-opbeat

An [opbeat-js](https://opbeat.com/docs/articles/get-started-with-javascript/) Ember shim.

This very small Ember Addon allows you to place configuration in your `environment.js` ENV.APP section, and have it hook up `Ember.onerror` and `window.onerror` to also report exceptions to [Opbeat](https://opbeat.com).

## Usage in your app

- add it to your `package.json`: `"ember-cli-opbeat": "*"`
- `ember g ember-cli-opbeat`
- Configure your application's ENV.APP section in  `environment.js`: add `opbeat: { appId: 'your-app-id', orgId: 'your-org-id' }`

## Installation for developing

* `git clone <repository-url>` this repository
* `cd ember-cli-opbeat`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
