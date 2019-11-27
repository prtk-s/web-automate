'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElementsByName = findElementsByName;

var _require = require('./util'),
    findWebElements = _require.findWebElements;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementsByName
 * @param {Object} driver webdriver object of web browser.
 * @param {String} name name attribute value of HTML element.
 * @return {Object[]} return a object of "webElement".
 * @example <caption>Examples usage of findElementsByName by name property of HTML element</caption>
 *  findElementsByName(driver, 'testName').then((webElement) => {
 *    //After resolve promise We'll get the Array of "webElement" object for HTML element whose "name" property is similar.
 *    // Here 'testName' is name attribute value of HTML element.
 *  }).catch((error) => {
 *    //handle error
 *  })
 */

function findElementsByName(driver, name) {
  return findWebElements(driver, { name: name }, PATH_TYPE.NAME);
}