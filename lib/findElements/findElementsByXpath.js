'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElementsByXpath = findElementsByXpath;

var _require = require('./util'),
    findWebElements = _require.findWebElements;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementsByXpath
 * @param {Object} driver webdriver object of web browser.
 * @param {String} xpath xpath of HTML element in dom.
 * @return {Object[]} return a object of "webElement".
 * @example <caption>Examples usage of findElementsByXpath by HTML element xpath</caption>
 *  findElementsByXpath(driver, '//*[@id="testXpath"]/div').then((webElement) => {
 *    // After resolve promise We'll get the Array of "webElement" object for HTML element whose "xpath" is similar.
 *    // Here '//*[@id="testXpath"]/div' is xpath of HTML in dom.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function findElementsByXpath(driver, xpath) {
  return findWebElements(driver, { xpath: xpath }, PATH_TYPE.XPATH);
}