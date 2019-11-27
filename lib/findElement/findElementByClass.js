'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.findElementByClass = findElementByClass;

var _require = require('./util'),
    findWebElement = _require.findWebElement;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementByClass
 * @param {Object} driver webdriver object of web browser.
 * @param {String} className class attribute value of HTML element.
 * @return {Object} return a object of "webElement".
 * @example <caption>Examples usage of findElementByClass by HTML class</caption>
 *  findElementByClass(driver, 'testClass' ).then((webElement) => {
 *    //After resolve promise We'll get the "webElement" object for HTML element whose "class" we pass.
 *    // Here 'testClass' is class attribute value of HTML element.
 *  }).catch((error) => {
 *    //handle error
 *  });
 */

function findElementByClass(driver, className) {
      return findWebElement(driver, { className: className }, PATH_TYPE.CLASS_NAME);
}