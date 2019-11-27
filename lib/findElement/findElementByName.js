'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElementByName = findElementByName;

var _require = require('./util'),
    findWebElement = _require.findWebElement;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementByName
 * @param {Object} driver webdriver object of web browser.
 * @param {String} name name attribute value of HTML element.
 * @return {Object} return a object of "webElement".
 * @example <caption>Examples usage of findElementByName by name property of HTML element</caption>
 *  findElementByName(driver, 'testName').then((webElement) => {
 *    //After resolve promise We'll get the "webElement" object for HTML element whose "name" property we pass.
 *    // Here 'testName' is name attribute value of HTML element.
 *  }).catch((error) => {
 *    //handle error
 *  })
 */


function findElementByName(driver, name) {
  return findWebElement(driver, { name: name }, PATH_TYPE.NAME);
}