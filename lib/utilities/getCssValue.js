'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isEmpty = require('lodash/isEmpty');

var _require = require('../untilElementLocated/util'),
    untilWebElementLocated = _require.untilWebElementLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE,
    rejectError = _require2.rejectError,
    undefinedFieldError = _require2.undefinedFieldError;

/**
 * @namespace getCssValue
 * @param {Object} driver webdriver object of web browser.
 * @param {Object} path object of path type as xpath, id, className, tagName, name properties.
 * @param {String} cssProperty Attribute of css of Html element we want to get.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {({webElement: Object, value: String}|Error)} returns Object of webElement & value. If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of getCssValue by HTML element xpath</caption>
 *  getCssValue(driver, { xpath: '//*[@id="testXpath"]/div' }, 'font-size't).then((webElement) => {
 *    // font-size is the css attriute whose value we want to get.
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "xpath" we pass.
 *    // By the help of "webElement" we get css attriute value of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of getCssValue by HTML element id</caption>
 *  getCssValue(driver, { id: 'testId' }, 'font-size').then((webElement) => {
 *    // font-size is the css attriute whose value we want to get.
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "id" we pass.
 *    // By the help of "webElement" we get css attriute value of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of getCssValue by HTML element class</caption>
 *  getCssValue(driver, { className: 'testClass' }, 'font-size't).then((webElement) => {
 *    // font-size is the css attriute whose value we want to get.
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "classname" we pass.
 *    // By the help of "webElement" we get css attriute value of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of getCssValue by HTML element tagName</caption>
 *  getCssValue(driver, { tagName: 'span' }, 'font-size').then((webElement) => {
 *    // font-size is the css attriute whose value we want to get.
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "tagname" we pass.
 *    // By the help of "webElement" we get css attriute value of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of getCssValue by name property of HTML element</caption>
 *  getCssValue(driver, { name: 'testName' }, 'font-size').then((webElement) => {
 *    // font-size is the css attriute whose value we want to get.
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "name" property we pass.
 *    // By the help of "webElement" we get css attriute value of HTML element.
 *    // Similarly we can access elemets HTML by using any attribute of which used in HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var getCssValue = exports.getCssValue = function getCssValue(driver, path, cssProperty, time) {
  return new Promise(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
      var webElement, value;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!isEmpty(cssProperty)) {
                _context.next = 3;
                break;
              }

              throw undefinedFieldError(PATH_TYPE.CSS_PROPERTY);

            case 3:
              _context.next = 5;
              return untilWebElementLocated(driver, path, time);

            case 5:
              webElement = _context.sent;
              _context.next = 8;
              return webElement.getCssValue(cssProperty);

            case 8:
              value = _context.sent;

              resolve({ webElement: webElement, value: value });
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);

              rejectError(reject, _context.t0);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 12]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};