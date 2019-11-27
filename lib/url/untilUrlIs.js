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
 * @namespace untilUrlIs
 * @param {Object} driver webdriver object of web browser.
 * @param {String} url url for which we want to wait.
 * @param {Number} [time] time parameter is optional & it represents for how much time user want to wait for "url". After time finish it stops operation & return error.
 * @example <caption>Examples usage of untilUrlIs</caption>
 *  untilUrlIs(driver, 'https://www.example.com', time).then((webElement) => {
 *    // if original url is "https://www.example.com".
 *    // It will wait until url is not exact same.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var untilUrlIs = exports.untilUrlIs = function untilUrlIs(driver, url, time) {
  return new Promise(function (resolve, reject) {
    try {
      if (isEmpty(driver)) throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);
      if (isEmpty(url)) throw undefinedFieldError(PATH_TYPE.URL);
      if (time && !isNumber(time)) throw undefinedFieldError(WEBDRIVER_CONSTANT.TIME, 'time can only be of number type');

      driver.wait(until.urlIs(url), time).then(function (webElement) {
        resolve(webElement);
      }).catch(function (error) {
        rejectError(reject, error);
      });
    } catch (error) {
      rejectError(reject, error);
    }
  });
};