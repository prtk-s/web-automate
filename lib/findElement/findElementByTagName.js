'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findElementByTagName = findElementByTagName;

var _require = require('./util'),
    findWebElement = _require.findWebElement;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementByTagName
 * @param {Object} driver webdriver object of web browser.
 * @param {String} tagName tagname of HTML element.
 * @return {Object} return a object of "webElement".
 * @example <caption>Examples usage of findElementByTagName by HTML element tagName</caption>
 *  findElementByTagName(driver, 'span').then((webElement) => {
 *    //After resolve promise We'll get the "webElement" object for HTML element whose "tagName" we pass.
 *    // Here 'span' is tag name of HTML element.
 *  }).catch((error) => {
 *    //handle error
 *  });
 */

function findElementByTagName(driver, tagName) {
    return findWebElement(driver, { tagName: tagName }, PATH_TYPE.TAG_NAME);
}