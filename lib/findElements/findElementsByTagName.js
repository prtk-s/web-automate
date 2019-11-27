'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElementsByTagName = findElementsByTagName;

var _require = require('./util'),
    findWebElements = _require.findWebElements;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementsByTagName
 * @param {Object} driver webdriver object of web browser.
 * @param {String} tagName tagname of HTML element.
 * @return {Object[]} return a object of "webElement".
 * @example <caption>Examples usage of findElementsByTagName by HTML element tagName</caption>
 *  findElementsByTagName(driver, 'span').then((webElement) => {
 *    //After resolve promise We'll get the Array of "webElement" object for HTML element whose "tagName" is similar.
 *    // Here 'span' is tag name of HTML element.
 *  }).catch((error) => {
 *    //handle error
 *  });
 */

function findElementsByTagName(driver, tagName) {
  return findWebElements(driver, { tagName: tagName }, PATH_TYPE.TAG_NAME);
}