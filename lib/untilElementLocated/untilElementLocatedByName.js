'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilElementLocatedByName = untilElementLocatedByName;

var _require = require('./util'),
    untilWebElementLocated = _require.untilWebElementLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace untilElementLocatedByName
 * @param {Object} driver webdriver object of web browser.
 * @param {String} name name attribute value of HTML element.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {(Object|Error)} return a object of "webElement". If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of untilElementLocatedByName by name property of HTML element</caption>
 *  untilElementLocatedByName(driver, 'testName', time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "name" property we pass.
 *    // Similarly we can access elemets HTML by using any attribute which used in HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function untilElementLocatedByName(driver, name, time) {
  return untilWebElementLocated(driver, { name: name }, time, PATH_TYPE.NAME);
}