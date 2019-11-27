'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElementsByClass = findElementsByClass;

var _require = require('./util'),
    findWebElements = _require.findWebElements;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementsByClass
 * @param {Object} driver webdriver object of web browser.
 * @param {String} className class attribute value of HTML element.
 * @return {Object[]} return a object of "webElement".
 * @example <caption>Examples usage of findElementsByClass by HTML class</caption>
 *  findElementsByClass(driver, 'testClass' ).then((webElement) => {
 *    //After resolve promise We'll get the Array of "webElement" object for HTML element whose "class" is similar.
 *    // Here 'testClass' is class attribute value of HTML element.
 *  }).catch((error) => {
 *    //handle error
 *  });
 */

function findElementsByClass(driver, className) {
  return findWebElements(driver, { className: className }, PATH_TYPE.CLASS_NAME);
}