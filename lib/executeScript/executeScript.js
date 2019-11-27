'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isEmpty = require('lodash/isEmpty');

var _require = require('../../utility'),
    WEBDRIVER_CONSTANT = _require.WEBDRIVER_CONSTANT,
    rejectError = _require.rejectError,
    undefinedFieldError = _require.undefinedFieldError;

/**
 * @namespace scrollBy
 * @param {Object} driver webdriver object of web browser.
 * @param {Number} xPixels to how much you want to scroll down/up from current position.
 * @param {Number} yPixels to how much you want to scroll leftr/right from current position.
 * @example <caption>Examples usage of scrollBy</caption>
 *  scrollBy(driver, xPixels, yPixels).then(() => {
 *   // It will scroll down/up to the pixels user give from the current position.
 *   // It will scroll left/right to the pixels user give from the current position.
 *   // To scroll up/right you have to give pixels in negative.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var scrollBy = exports.scrollBy = function scrollBy(driver) {
  var xPixels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var yPixels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return new Promise(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!isEmpty(driver)) {
                _context.next = 3;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);

            case 3:
              if (!isEmpty(xPixels)) {
                _context.next = 5;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.X_PIXEL);

            case 5:
              if (!isEmpty(yPixels)) {
                _context.next = 7;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.Y_PIXEL);

            case 7:
              _context.next = 9;
              return driver.executeScript('window.scrollBy(' + yPixels + ',' + xPixels + ')');

            case 9:
              resolve();
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

    return function (_x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }());
};

/**
 * @namespace scrollTo
 * @param {Object} driver webdriver object of web browser.
 * @param {Number} xPixels to how much you want to scroll down/up from initial position.
 * @param {Number} yPixels to how much you want to scroll leftr/right from initial position.
 * @example <caption>Examples usage of scrollTo</caption>
 *  scrollTo(driver, xPixels, yPixels).then(() => {
 *   // It will scroll down/up to the pixels user give from the initial position.
 *   // It will scroll left/right to the pixels user give from the initial position.
 *  // To scroll up/right you have to give pixels in negative.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var scrollTo = exports.scrollTo = function scrollTo(driver) {
  var xPixels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var yPixels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return new Promise(function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!isEmpty(driver)) {
                _context2.next = 3;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);

            case 3:
              if (!isEmpty(xPixels)) {
                _context2.next = 5;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.X_PIXEL);

            case 5:
              if (!isEmpty(yPixels)) {
                _context2.next = 7;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.Y_PIXEL);

            case 7:
              _context2.next = 9;
              return driver.executeScript('window.scrollTo(' + yPixels + ',' + xPixels + ')');

            case 9:
              resolve();
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](0);

              rejectError(reject, _context2.t0);

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 12]]);
    }));

    return function (_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }());
};