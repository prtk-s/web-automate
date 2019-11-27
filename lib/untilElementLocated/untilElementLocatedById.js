'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilElementLocatedById = untilElementLocatedById;

var _require = require('./util'),
    untilWebElementLocated = _require.untilWebElementLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace untilElementLocatedById
 * @param {Object} driver webdriver object of web browser.
 * @param {String} id id attribute value of HTML element.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {(Object|Error)} return a object of "webElement". If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of untilElementLocatedById by HTML element id</caption>
 *  untilElementLocatedById(driver, 'testId', time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "id" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function untilElementLocatedById(driver, id, time) {
  return untilWebElementLocated(driver, { id: id }, time, PATH_TYPE.ID);
}