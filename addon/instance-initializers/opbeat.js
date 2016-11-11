/* globals _opbeat */
import Ember from 'ember';

function registerWindowOnError (notifyFn) {
  return window.onerror = function (message, file, line, column, error) {
    if (message === 'Script error.') {
      return;
    }
    notifyFn(error || new Error(message, file, line));
  };
}

function registerEmberOnError (notifyFn) {
  var originalOnError = Ember.onerror || Ember.K;
  Ember.onerror = function (err) {
    originalOnError(err);
    notifyFn(err);
  };
}

function configureOpbeat(config) {
  _opbeat('config', config);
}

export function initialize(appInstance) {
  var notifyFn;
  var ENV = appInstance.resolveRegistration('config:environment');

  if (!(ENV && ENV.APP && ENV.APP.opbeat)) {
    Ember.Logger.warn('Opbeat not configured!');
    return;
  }

  configureOpbeat(ENV.APP.opbeat);

  notifyFn = function(error) {
    _opbeat('captureException', error);
  };

  registerWindowOnError(notifyFn);
  registerEmberOnError(notifyFn);
}

export default {
  name: 'opbeat',
  initialize
};
