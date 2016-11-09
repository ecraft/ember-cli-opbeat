/* globals _opbeat */
import Ember from 'ember';
import ENV from '../config/environment';

export function initialize(/* application */) {
  var registerWindowOnError,
    registerEmberOnError,
    notifyFn;

  if (!(ENV && ENV.opbeat)) {
    Ember.Logger.warn('Opbeat not configured!', ENV);
    return;
  }

  registerWindowOnError = function (notifyFn) {
    return window.onerror = function (message, file, line, column, error) {
      if (message === 'Script error.') {
        return;
      }
      notifyFn(error || new Error(message, file, line));
    };
  };

  registerEmberOnError = function (notifyFn) {
    var originalOnError;
    originalOnError = Ember.onerror || Ember.K;
    return Ember.onerror = (function () {
      return function (err) {
        originalOnError(err);
        return notifyFn(err);
      };
    })(this);
  };

  _opbeat('config', ENV.opbeat);

  notifyFn = function(error) {
    return _opbeat('captureException', error);
  };

  registerWindowOnError(notifyFn);
  registerEmberOnError(notifyFn);
}

export default {
  name: 'opbeat',
  initialize
};
