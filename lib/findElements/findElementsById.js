'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findElementsById = findElementsById;

var _require = require('./util'),
    findWebElements = _require.findWebElements;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementsById
 * @param {Object} driver webdriver object of web browser.
 * @param {String} id id attribute of HTML element.
 * @return {Object[]} return a object of "webElement".
 * @example <caption>Examples usage of findElementsById by HTML element id</caption>
 *  findElementsById(driver, 'testId' ).then((webElement) => {
 *    // After resolve promise We'll get the Array of "webElement" object for HTML element whose "id" is similar.
 *    // Here 'testId' is id attribute value of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function findElementsById(driver, id) {
  return findWebElements(driver, { id: id }, PATH_TYPE.ID);
}