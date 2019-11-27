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
 * @namespace getCurrentUrl
 * @param {Object} driver webdriver object of web browser.
 * @return {String} It will return the current page url.
 * @example <caption>Examples usage of getCurrentUrl</caption>
 *  getCurrentUrl(driver).then((url) => {
 *   // Ir will return the url of current webPae
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var getCurrentUrl = exports.getCurrentUrl = function getCurrentUrl(driver) {
  return new Promise(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
      var url;
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
              _context.next = 5;
              return driver.getCurrentUrl();

            case 5:
              url = _context.sent;

              resolve(url);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);

              rejectError(reject, _context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};