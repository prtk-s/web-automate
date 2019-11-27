'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilElementsLocatedByXpath = untilElementsLocatedByXpath;

var _require = require('./util'),
    untilWebElementsLocated = _require.untilWebElementsLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;

/**
 * @namespace untilElementsLocatedByXpath
 * @param {Object} driver webdriver object of web browser.
 * @param {String} xpath xpath of HTML element in DOM.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {(Object[]|Error)} return a Array of object of "webElement". If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of untilElementsLocatedByXpath by HTML element xpath</caption>
 *  untilElementsLocatedByXpath(driver, { xpath: '//*[@id="testXpath"]/div' }, time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" Array of object for HTML element whose "xpath" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function untilElementsLocatedByXpath(driver, xpath, time) {
  return untilWebElementsLocated(driver, { xpath: xpath }, time, PATH_TYPE.XPATH);
}