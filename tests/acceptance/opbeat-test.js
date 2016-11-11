import { test } from 'qunit';
import Ember from 'ember';
import { initialize } from 'dummy/instance-initializers/opbeat';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | opbeat', {
  // Take the instance initializer and apply it to the application's instance
  beforeEach() {
    this.oldErrorHandler = function () { return 42; };
    this.oldEmberErrorHandler = function () { return 43; };

    window.onerror = this.oldErrorHandler;
    Ember.onerror = this.oldEmberErrorHandler;

    this.appInstance = this.application.buildInstance();
    initialize(this.appInstance);
  },

  afterEach() {
    Ember.run(this.appInstance, 'destroy');
  }
});

test('has loaded _opbeat global', function(assert) {
  assert.ok(window._opbeat,
            'The initializer must have a _opbeat global!');
});

test('has set an window error handler of its own', function(assert) {
  assert.notEqual(window.onerror,
                  this.oldErrorHandler,
                  'The initializer must have set the error handler!');
});

test('has set an Ember.onerror handler of its own', function(assert) {
  assert.notEqual(Ember.onerror,
                  this.oldEmberErrorHandler,
                  'The initializer must have set the Ember error handler!');
});

