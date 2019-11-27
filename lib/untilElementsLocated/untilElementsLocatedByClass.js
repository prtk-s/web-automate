'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilElementsLocatedByClass = untilElementsLocatedByClass;

var _require = require('./util'),
    untilWebElementsLocated = _require.untilWebElementsLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;

/**
 * @namespace untilElementsLocatedByClass
 * @param {Object} driver webdriver object of web browser.
 * @param {String} className class attribute value of HTML element.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {(Object[]|Error)} return a Array of object of "webElement". If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of untilElementsLocatedByClass by HTML element class</caption>
 *  untilElementsLocatedByClass(driver, 'testClass', time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" Array of object for HTML element whose "classname" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function untilElementsLocatedByClass(driver, className, time) {
  return untilWebElementsLocated(driver, { className: className }, time, PATH_TYPE.CLASS_NAME);
}