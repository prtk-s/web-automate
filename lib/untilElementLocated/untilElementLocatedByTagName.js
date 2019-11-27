'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilElementLocatedByTagName = untilElementLocatedByTagName;

var _require = require('./util'),
    untilWebElementLocated = _require.untilWebElementLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace untilElementLocatedByTagName
 * @param {Object} driver webdriver object of web browser.
 * @param {String} tagName tagname of HTML element.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {(Object|Error)} return a object of "webElement". If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of untilElementLocatedByTagName by HTML element tagName</caption>
 *  untilElementLocatedByTagName(driver,  'span', time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "tagname" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function untilElementLocatedByTagName(driver, tagName, time) {
  return untilWebElementLocated(driver, { tagName: tagName }, time, PATH_TYPE.TAG_NAME);
}