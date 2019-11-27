'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _require = require('./util'),
    findWebElements = _require.findWebElements;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;

/**
 * @namespace findElements
 * @param {Object} driver webdriver object of web browser.
 * @param {Object} path object of path type as xpath, id, className, tagName, name properties.
 * @return {Object[]} return a object of "webElement".
 * @example <caption>Examples usage of findElements by HTML element xpath</caption>
 *  findElements(driver, { xpath: '//*[@id="testXpath"]/div' }).then((webElement) => {
 *    // After resolve promise We'll get the Array of "webElement" object for HTML element whose xpath is similar.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of findElements by HTML element id</caption>
 *  findElements(driver, { id: 'testId' }).then((webElement) => {
 *    // After resolve promise We'll get the Array of "webElement" object for HTML element whose "id" is similar.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of findElements by HTML element class</caption>
 *  findElements(driver, { className: 'testClass' }).then((webElement) => {
 *    // After resolve promise We'll get the Array of "webElement" object for HTML element whose "classname" is similar.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of findElements by HTML element tagName</caption>
 *  findElements(driver, { tagName: 'span' }).then((webElement) => {
 *    // After resolve promise We'll get the Array of "webElement" object for HTML element whose "tagname" is similar.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of findElements by name property of HTML element</caption>
 *  findElements(driver, { name: 'testName' }).then((webElement) => {
 *    // After resolve promise We'll get the Array of "webElement" object for HTML element whose "name" property is similar.
 *    // Similarly we can access elemets HTML by using any attribute which used in HTML element.
 *    // As we can pass title, for, alt etc. attributes of an HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var findElements = exports.findElements = function findElements(driver, path) {
  return findWebElements(driver, path, PATH_TYPE.PATH);
};