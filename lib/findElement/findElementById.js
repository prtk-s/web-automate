'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findElementById = findElementById;

var _require = require('./util'),
    findWebElement = _require.findWebElement;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE;
/**
 * @namespace findElementById
 * @param {Object} driver webdriver object of web browser.
 * @param {String} id id attribute of HTML element.
 * @return {Object} return a object of "webElement".
 * @example <caption>Examples usage of findElementById by HTML element id</caption>
 *  findElementById(driver, 'testId' ).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "id" we pass.
 *    // Here 'testId' is id attribute value of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

function findElementById(driver, id) {
    return findWebElement(driver, { id: id }, PATH_TYPE.ID);
}