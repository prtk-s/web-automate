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
 * @namespace untilUrlMatches
 * @param {Object} driver webdriver object of web browser.
 * @param {String} regex Regular Expression of url.
 * @param {Number} [time] time parameter is optional & it represents for how much time user want to wait for "url". After time finish it stops operation & return error.
 * @example <caption>Examples usage of untilUrlMatches</caption>
 *  untilUrlMatches(driver, /^example$/, time).then((webElement) => {
 *    //In this methiod we paas the regex for the url.
 *    // It will wait until url is not matched with regex.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var untilUrlMatches = exports.untilUrlMatches = function untilUrlMatches(driver, url, time) {
  return new Promise(function (resolve, reject) {
    try {
      if (isEmpty(driver)) throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);
      if (isEmpty(url.toString())) throw undefinedFieldError(PATH_TYPE.URL);
      if (time && !isNumber(time)) throw undefinedFieldError(WEBDRIVER_CONSTANT.TIME, 'time can only be of number type');

      driver.wait(until.urlMatches(url), time).then(function (webElement) {
        resolve(webElement);
      }).catch(function (error) {
        rejectError(reject, error);
      });
    } catch (error) {
      rejectError(reject, error);
    }
  });
};