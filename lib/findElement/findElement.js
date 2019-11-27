'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElement = findElement;

var _require = require('./util'),
    findWebElement = _require.findWebElement;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElement
 * @param {Object} driver webdriver object of web browser.
 * @param {Object} path object of path type as xpath, id, className, tagName, name properties.
 * @return {Object} return a object of "webElement".
 * @example <caption>Examples usage of findElement by HTML element xpath</caption>
 *  findElement(driver, { xpath: '//*[@id="testXpath"]/div' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "xpath" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of findElement by HTML element id</caption>
 *  findElement(driver, { id: 'testId' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "id" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of findElement by HTML element class</caption>
 *  findElement(driver, { className: 'testClass' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "classname" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of findElement by HTML element tagName</caption>
 *  findElement(driver, { tagName: 'span' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "tagname" we pass.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of findElement by name property of HTML element</caption>
 *  findElement(driver, { name: 'testName' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "name" property we pass.
 *    // Similarly we can access elemets HTML by using any attribute which used in HTML element.
 *    // As we can pass title, for, alt etc. attributes of an HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function findElement(driver, path) {
  return findWebElement(driver, path, PATH_TYPE.PATH);
};