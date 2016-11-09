
registerEmberOnError = function(notifyFn) {
  var originalOnError;
  originalOnError = Ember.onerror || Ember.K;
  return Ember.onerror = (function(_this) {
    return function(err) {
      originalOnError(err);
      return notifyFn(err);
    };
  })(this);
};

registerWindowOnError = function(notifyFn) {
  return window.onerror = function(message, file, line, column, error) {
    if (message === 'Script error.') {
      return;
    }
    error = error || {
        error: {
          message: message,
          fileName: file,
          lineNumber: line,
          columnNumber: column || 0
        }
      };
    return notifyFn(error);
  };
};


export function initialize(/* application */) {
  var notifyFn, ref, ref1;
  if ((((ref = ENV.opbeat) != null ? ref.orgId : void 0) != null) && (((ref1 = ENV.opbeat) != null ? ref1.appId : void 0) != null)) {
    _opbeat('config', ENV.opbeat);
    notifyFn = function(error) {
      return _opbeat('captureException', error);
    };
    registerWindowOnError(notifyFn);
    registerEmberOnError(notifyFn);
  } else {
    Ember.Logger.warn('Opbeat not configured!', ENV);
  }
}

export default {
  name: 'opbeat',
  initialize
};
