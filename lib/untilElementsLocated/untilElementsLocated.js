'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.untilElementsLocated = untilElementsLocated;

var _require = require('./util'),
    untilWebElementsLocated = _require.untilWebElementsLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;

/**
 * @namespace untilElementsLocated
 * @param {Object} driver webdriver object of web browser.
 * @param {Object} path object of path type as xpath, id, className, tagName, name properties.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {(Object[]|Error)} return a Array of object of "webElement". If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of untilElementsLocated by HTML element xpath</caption>
 *  untilElementsLocated(driver, { xpath: '//*[@id="testXpath"]/div' }, time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" Array of object for HTML element whose "xpath" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of untilElementsLocated by HTML element id</caption>
 *  untilElementsLocated(driver, { id: 'testId' }, time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" Array of object for HTML element whose "id" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of untilElementsLocated by HTML element class</caption>
 *  untilElementsLocated(driver, { className: 'testClass' }, time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" Array of object for HTML element whose "classname" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of untilElementsLocated by HTML element tagName</caption>
 *  untilElementsLocated(driver, { tagName: 'span' }, time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" Array of object for HTML element whose "tagname" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of untilElementsLocated by name property of HTML element</caption>
 *  untilElementsLocated(driver, { name: 'testName' }, time).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" Array of object for HTML element whose "name" property we pass.
 *    // Similarly we can access elemets HTML by using any attribute which used in HTML element.
 *    // As we can pass title, for, alt etc. attributes of an HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function untilElementsLocated(driver, path, time) {
  return untilWebElementsLocated(driver, path, time, PATH_TYPE.PATH);
}