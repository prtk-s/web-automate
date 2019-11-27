'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isEmpty = require('lodash/isEmpty');

var _require = require('../../utility'),
    PATH_TYPE = _require.PATH_TYPE,
    WEBDRIVER_CONSTANT = _require.WEBDRIVER_CONSTANT,
    rejectError = _require.rejectError,
    undefinedFieldError = _require.undefinedFieldError;

var findWebElements = exports.findWebElements = function findWebElements(driver, path, field) {
  return new Promise(function (resolve, reject) {
    try {
      if (isEmpty(driver)) throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);
      if (field !== PATH_TYPE.PATH) {
        if (isEmpty(path[field])) throw undefinedFieldError(field);
      } else if (isEmpty(path)) throw undefinedFieldError(PATH_TYPE.PATH);
      driver.findElements(path).then(function (webElement) {
        resolve(webElement);
      }).catch(function (error) {
        rejectError(reject, error);
      });
    } catch (error) {
      rejectError(reject, error);
    }
  });
};