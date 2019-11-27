'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var isEmpty = require('lodash/isEmpty');
var fs = require('fs');

var _require = require('../untilElementLocated/util'),
    untilWebElementLocated = _require.untilWebElementLocated;

var _require2 = require('../../utility'),
    PATH_TYPE = _require2.PATH_TYPE,
    WEBDRIVER_CONSTANT = _require2.WEBDRIVER_CONSTANT,
    rejectError = _require2.rejectError,
    undefinedFieldError = _require2.undefinedFieldError;

/**
 * @namespace closeCurrentWindow
 * @param {Object} driver webdriver object of web browser.
 * @example <caption>Examples usage of closeCurrentWindow</caption>
 *  closeCurrentWindow(driver).then(() => {
 *   // It will close the current window in browser.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var closeCurrentWindow = exports.closeCurrentWindow = function closeCurrentWindow(driver) {
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
              _context.next = 5;
              return driver.close();

            case 5:
              resolve();
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

              rejectError(reject, _context.t0);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

/**
 * @namespace closeBrowser
 * @param {Object} driver webdriver object of web browser.
 * @example <caption>Examples usage of closeBrowser</caption>
 *  closeBrowser(driver).then(() => {
 *   // It will close the current browser.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var closeBrowser = exports.closeBrowser = function closeBrowser(driver) {
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
              _context2.next = 5;
              return driver.quit();

            case 5:
              resolve();
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](0);

              rejectError(reject, _context2.t0);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 8]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
};

/**
 * @namespace navigateForward
 * @param {Object} driver webdriver object of web browser.
 * @example <caption>Examples usage of navigateForward</caption>
 *  navigateForward(driver).then(() => {
 *   // It will navigate to next page in browser history.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var navigateForward = exports.navigateForward = function navigateForward(driver) {
  return new Promise(function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;

              if (!isEmpty(driver)) {
                _context3.next = 3;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);

            case 3:
              _context3.next = 5;
              return driver.navigate().forward();

            case 5:
              resolve();
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](0);

              rejectError(reject, _context3.t0);

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 8]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

/**
 * @namespace navigateBack
 * @param {Object} driver webdriver object of web browser.
 * @example <caption>Examples usage of navigateBack</caption>
 *  navigateBack(driver).then(() => {
 *   // It will navigate to back page in browser history.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var navigateBack = exports.navigateBack = function navigateBack(driver) {
  return new Promise(function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;

              if (!isEmpty(driver)) {
                _context4.next = 3;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);

            case 3:
              _context4.next = 5;
              return driver.navigate().back();

            case 5:
              resolve();
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4['catch'](0);

              rejectError(reject, _context4.t0);

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 8]]);
    }));

    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

/**
 * @namespace navigateTo
 * @param {Object} driver webdriver object of web browser.
 * @param {String} url on which navigate to.
 * @example <caption>Examples usage of navigateTo</caption>
 *  navigateTo(driver, url).then(() => {
 *   // It will navigate to back page in browser history.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var navigateTo = exports.navigateTo = function navigateTo(driver, url) {
  return new Promise(function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;

              if (!isEmpty(driver)) {
                _context5.next = 3;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);

            case 3:
              if (!isEmpty(url)) {
                _context5.next = 5;
                break;
              }

              throw undefinedFieldError(PATH_TYPE.URL);

            case 5:
              _context5.next = 7;
              return driver.navigate().to(url);

            case 7:
              resolve();
              _context5.next = 13;
              break;

            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5['catch'](0);

              rejectError(reject, _context5.t0);

            case 13:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined, [[0, 10]]);
    }));

    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
};

/**
 * @namespace refreshPage
 * @param {Object} driver webdriver object of web browser.
 * @example <caption>Examples usage of refreshPage</caption>
 * refreshPage(driver).then(() => {
 *   // It will refresh the current web page.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var refreshPage = exports.refreshPage = function refreshPage(driver) {
  return new Promise(function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;

              if (!isEmpty(driver)) {
                _context6.next = 3;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);

            case 3:
              _context6.next = 5;
              return driver.navigate().refresh();

            case 5:
              resolve();
              _context6.next = 11;
              break;

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6['catch'](0);

              rejectError(reject, _context6.t0);

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined, [[0, 8]]);
    }));

    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
};

/**
 * @namespace getTitle
 * @param {Object} driver webdriver object of web browser.
 * @return {String} It will return the current Web pae title.
 * @example <caption>Examples usage of getTitle</caption>
 * getTitle(driver).then(() => {
 *   // It will return the current title of page.
 *  }).catch((error) => {
 *    // handle error
 *  });
 */

var getTitle = exports.getTitle = function getTitle(driver) {
  return new Promise(function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
      var title;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;

              if (!isEmpty(driver)) {
                _context7.next = 3;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);

            case 3:
              _context7.next = 5;
              return driver.getTitle();

            case 5:
              title = _context7.sent;

              resolve(title);
              _context7.next = 12;
              break;

            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7['catch'](0);

              rejectError(reject, _context7.t0);

            case 12:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined, [[0, 9]]);
    }));

    return function (_x13, _x14) {
      return _ref7.apply(this, arguments);
    };
  }());
};

/**
 * @namespace switchToFrame
 * @param {Object} driver webdriver object of web browser.
 * @param {String} frameId is the id of iFrame whose webElement we want to access.
 * @param {Number} [time] time is optional.This parameter represent for how much time user want to wait for frameID. After time finish it returns error.
 * @example <caption>Examples usage of switchToFrame</caption>
 * switchToFrame(driver).then(() => {
 *   // It will return the current title of page.
 *  }).catch((error) => {
 *   // handle error
 *  });
 */

var switchToFrame = exports.switchToFrame = function switchToFrame(driver, frameId, time) {
  return new Promise(function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return untilWebElementLocated(driver, { id: frameId }, time);

            case 3:
              _context8.next = 5;
              return driver.switchTo().frame(frameId);

            case 5:
              resolve();
              _context8.next = 11;
              break;

            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8['catch'](0);

              rejectError(reject, _context8.t0);

            case 11:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, undefined, [[0, 8]]);
    }));

    return function (_x15, _x16) {
      return _ref8.apply(this, arguments);
    };
  }());
};

/**
 * @namespace switchToDefaultContent
 * @param {Object} driver webdriver object of web browser.
 * @example <caption>Examples usage of switchToDefaultContent</caption>
 * switchToDefaultContent(driver).then(() => {
 *   // It will set the current webPage Environment from another frame.
 *  }).catch((error) => {
 *   // handle error
 *  });
 */

var switchToDefaultContent = exports.switchToDefaultContent = function switchToDefaultContent(driver) {
  return new Promise(function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.prev = 0;

              if (!isEmpty(driver)) {
                _context9.next = 3;
                break;
              }

              throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);

            case 3:
              _context9.next = 5;
              return driver.switchTo().defaultContent();

            case 5:
              resolve();
              _context9.next = 11;
              break;

            case 8:
              _context9.prev = 8;
              _context9.t0 = _context9['catch'](0);

              rejectError(reject, _context9.t0);

            case 11:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, undefined, [[0, 8]]);
    }));

    return function (_x17, _x18) {
      return _ref9.apply(this, arguments);
    };
  }());
};

/**
 * @namespace takeScreenshot
 * @param {Object} driver webdriver object of web browser.
 * @example <caption>Examples usage of takeScreenshot</caption>
 * takeScreenshot(driver).then(() => {
 *   // It will take the screenshot of current page.
 *  }).catch((error) => {
 *   // handle error
 *  });
 */

var takeScreenshot = exports.takeScreenshot = function takeScreenshot(driver) {
  return new Promise(function (resolve, reject) {
    try {
      driver.takeScreenshot().then(function (base64Image) {
        var decodedImage = Buffer.from(base64Image, 'base64');
        fs.writeFile(Date.now() + '.jpg', decodedImage, function (error) {
          if (error) {
            rejectError(reject, error);
          } else {
            resolve();
          }
        });
      });
    } catch (error) {
      rejectError(reject, error);
    }
  });
};