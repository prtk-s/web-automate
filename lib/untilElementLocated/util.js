'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilWebElementLocated = untilWebElementLocated;

var _require = require('selenium-webdriver'),
    until = _require.until;

var isEmpty = require('lodash/isEmpty');
var isNumber = require('lodash/isNumber');

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE,
    WEBDRIVER_CONSTANT = _require2.WEBDRIVER_CONSTANT,
    rejectError = _require2.rejectError,
    undefinedFieldError = _require2.undefinedFieldError;

function untilWebElementLocated(driver, path, time) {
  var field = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  return new Promise(function (resolve, reject) {
    try {
      if (isEmpty(driver)) throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);
      if (field !== null && field !== PATH_TYPE.PATH) {
        if (isEmpty(path[field])) throw undefinedFieldError(field);
      } else if (isEmpty(path)) throw undefinedFieldError(PATH_TYPE.PATH);
      if (time && !isNumber(time)) throw undefinedFieldError(WEBDRIVER_CONSTANT.TIME, 'time can only be of number type');

      driver.wait(until.elementLocated(path), time).then(function (webElement) {
        resolve(webElement);
      }).catch(function (error) {
        rejectError(reject, error);
      });
    } catch (error) {
      rejectError(reject, error);
    }
  });
}