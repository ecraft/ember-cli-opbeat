/* globals _opbeat */
import Ember from 'ember';
import ENV from '../config/environment';

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

export function initialize(/* application */) {
  var notifyFn;

  if (!(ENV && ENV.opbeat)) {
    Ember.Logger.warn('Opbeat not configured!', ENV);
    return;
  }

  _opbeat('config', ENV.opbeat);

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
