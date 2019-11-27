'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilElementsLocatedByTagName = untilElementsLocatedByTagName;

var _require = require('./util'),
    untilWebElementsLocated = _require.untilWebElementsLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;

/**
 * @namespace untilElementsLocatedByTagName
 * @param {Object} driver webdriver object of web browser.
 * @param {String} tagName tagname of HTML element.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {(Object[]|Error)} return a Array of object of "webElement". If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of untilElementsLocatedByTagName by HTML element tagName</caption>
 *  untilElementsLocatedByTagName(driver,  'span', time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" Array of object for HTML element whose "tagname" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function untilElementsLocatedByTagName(driver, tagName, time) {
  return untilWebElementsLocated(driver, { tagName: tagName }, time, PATH_TYPE.TAG_NAME);
}