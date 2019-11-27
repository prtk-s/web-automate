'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElementByXpath = findElementByXpath;

var _require = require('./util'),
    findWebElement = _require.findWebElement;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementByXpath
 * @param {Object} driver webdriver object of web browser.
 * @param {String} xpath xpath of HTML element in dom.
 * @return {Object} return a object of "webElement".
 * @example <caption>Examples usage of findElementByXpath by HTML element xpath</caption>
 *  findElementByXpath(driver, '//*[@id="testXpath"]/div').then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "xpath" we pass.
 *    // Here '//*[@id="testXpath"]/div' is xpath of HTML in dom.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function findElementByXpath(driver, xpath) {
  return findWebElement(driver, { xpath: xpath }, PATH_TYPE.XPATH);
}