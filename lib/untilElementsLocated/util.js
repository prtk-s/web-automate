'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilWebElementsLocated = untilWebElementsLocated;

var _require = require('selenium-webdriver'),
    until = _require.until;

var isEmpty = require('lodash/isEmpty');
var isNumber = require('lodash/isNumber');

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE,
    WEBDRIVER_CONSTANT = _require2.WEBDRIVER_CONSTANT,
    rejectError = _require2.rejectError,
    undefinedFieldError = _require2.undefinedFieldError;

function untilWebElementsLocated(driver, path, time, field) {
  return new Promise(function (resolve, reject) {
    try {
      if (isEmpty(driver)) throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);
      if (field !== PATH_TYPE.PATH) {
        if (isEmpty(path[field])) throw undefinedFieldError(field);
      } else if (isEmpty(path)) throw undefinedFieldError(PATH_TYPE.PATH);
      if (time && !isNumber(time)) throw undefinedFieldError(WEBDRIVER_CONSTANT.TIME, 'time can only be of number type');

      driver.wait(until.elementsLocated(path), time).then(function (webElement) {
        resolve(webElement);
      }).catch(function (error) {
        rejectError(reject, error);
      });
    } catch (error) {
      rejectError(reject, error);
    }
  });
}