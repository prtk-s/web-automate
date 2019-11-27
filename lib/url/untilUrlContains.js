'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = require('selenium-webdriver'),
    until = _require.until;

var isEmpty = require('lodash/isEmpty');
var isNumber = require('lodash/isNumber');

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE,
    WEBDRIVER_CONSTANT = _require2.WEBDRIVER_CONSTANT,
    rejectError = _require2.rejectError,
    undefinedFieldError = _require2.undefinedFieldError;
/**
 * @namespace untilUrlContains
 * @param {Object} driver webdriver object of web browser.
 * @param {String} url url for which we want to wait.
 * @param {Number} [time] time parameter is optional & it represents for how much time user want to wait for "url". After time finish it stops operation & return error.
 * @example <caption>Examples usage of untilUrlContains</caption>
 *  untilUrlContains(driver, 'example.com', time).then((webElement) => {
 *    // if original url is "https://www.example.com" & url for wait is "example.com".
 *    // It will wait until url doesn't contains "example.com".
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var untilUrlContains = exports.untilUrlContains = function untilUrlContains(driver, url, time) {
  return new Promise(function (resolve, reject) {
    try {
      if (isEmpty(driver)) throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);
      if (isEmpty(url)) throw undefinedFieldError(PATH_TYPE.URL);
      if (time && !isNumber(time)) throw undefinedFieldError(WEBDRIVER_CONSTANT.TIME, 'time can only be of number type');

      driver.wait(until.urlContains(url), time).then(function () {
        resolve(true);
      }).catch(function (error) {
        rejectError(reject, error);
      });
    } catch (error) {
      rejectError(reject, error);
    }
  });
};