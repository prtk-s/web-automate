'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.undefinedFieldError = undefinedFieldError;
exports.rejectError = rejectError;

function undefinedFieldError(field) {
  var customMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return new Error(customMessage || ''.concat(field, ' is undefined'));
}

function rejectError(reject, error) {
  return reject(error);
}
