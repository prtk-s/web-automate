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
 * @namespace getElementText
 * @param {Object} driver webdriver object of web browser.
 * @param {Object} path object of path type as xpath, id, className, tagName, name properties.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for "webElement". After time finish it returns error.
 * @return {({webElement: Object, text: String}|Error)} returns a object of "webElement" && text. If we pass time param & it will not get "webElement", it will return error.
 * @example <caption>Examples usage of getElementText by HTML element xpath</caption>
 *  getElementText(driver, { xpath: '//*[@id="testXpath"]/div' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "xpath" we pass.
 *    // By the help of "webElement" we get text of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of getElementText by HTML element id</caption>
 *  getElementText(driver, { id: 'testId' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "id" we pass.
 *    // By the help of "webElement" we get text of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of getElementText by HTML element class</caption>
 *  getElementText(driver, { className: 'testClass' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "classname" we pass.
 *    // By the help of "webElement" we get text of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of getElementText by HTML element tagName</caption>
 *  getElementText(driver, { tagName: 'span' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "tagname" we pass.
 *    // By the help of "webElement" we get text of HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 * @example <caption>Examples usage of getElementText by name property of HTML element</caption>
 *  getElementText(driver, { name: 'testName' }).then((webElement) => {
 *    // After resolve promise We'll get the "webElement" object for HTML element whose "name" property we pass.
 *    // By the help of "webElement" we get text of HTML element.
 *    // Similarly we can access elemets HTML by using any attribute which used in HTML element.
 *    // As we can pass title, for, alt etc. attributes of an HTML element.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */


var getElementText = exports.getElementText = function getElementText(driver, path, time) {
  return new Promise(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, reject) {
      var webElement, getText;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!isEmpty(path)) {
                _context.next = 3;
                break;
              }

              throw undefinedFieldError(PATH_TYPE.PATH);

            case 3:
              _context.next = 5;
              return untilWebElementLocated(driver, path, time);

            case 5:
              webElement = _context.sent;
              _context.next = 8;
              return webElement.getText();

            case 8:
              getText = _context.sent;

              response({ text: getText.trim(), webElement: webElement });
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