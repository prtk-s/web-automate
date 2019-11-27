'use strict';

/**
 * @file web-automate
 * @description web-automate is a browser automation library. Used for testing web-applications
 * with selenium. web-automate allows you to use some selenium functionality in a easy manner.
 * By using web-automate you can do fast and clean code at some level.
 * @author Parteek
 * @version 1.0.1
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findElement = require('./findElement');

Object.defineProperty(exports, 'findElement', {
  enumerable: true,
  get: function get() {
    return _findElement.findElement;
  }
});
Object.defineProperty(exports, 'findElementByXpath', {
  enumerable: true,
  get: function get() {
    return _findElement.findElementByXpath;
  }
});
Object.defineProperty(exports, 'findElementByTagName', {
  enumerable: true,
  get: function get() {
    return _findElement.findElementByTagName;
  }
});
Object.defineProperty(exports, 'findElementByName', {
  enumerable: true,
  get: function get() {
    return _findElement.findElementByName;
  }
});
Object.defineProperty(exports, 'findElementById', {
  enumerable: true,
  get: function get() {
    return _findElement.findElementById;
  }
});
Object.defineProperty(exports, 'findElementByClass', {
  enumerable: true,
  get: function get() {
    return _findElement.findElementByClass;
  }
});

var _findElements = require('./findElements');

Object.defineProperty(exports, 'findElements', {
  enumerable: true,
  get: function get() {
    return _findElements.findElements;
  }
});
Object.defineProperty(exports, 'findElementsByXpath', {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsByXpath;
  }
});
Object.defineProperty(exports, 'findElementsByTagName', {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsByTagName;
  }
});
Object.defineProperty(exports, 'findElementsByName', {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsByName;
  }
});
Object.defineProperty(exports, 'findElementsById', {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsById;
  }
});
Object.defineProperty(exports, 'findElementsByClass', {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsByClass;
  }
});

var _untilElementsLocated = require('./untilElementsLocated');

Object.defineProperty(exports, 'untilElementsLocatedByXpath', {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedByXpath;
  }
});
Object.defineProperty(exports, 'untilElementsLocatedByTagName', {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedByTagName;
  }
});
Object.defineProperty(exports, 'untilElementsLocatedByName', {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedByName;
  }
});
Object.defineProperty(exports, 'untilElementsLocatedById', {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedById;
  }
});
Object.defineProperty(exports, 'untilElementsLocatedByClass', {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedByClass;
  }
});
Object.defineProperty(exports, 'untilElementsLocated', {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocated;
  }
});

var _untilElementLocated = require('./untilElementLocated');

Object.defineProperty(exports, 'untilElementLocatedByXpath', {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedByXpath;
  }
});
Object.defineProperty(exports, 'untilElementLocatedByTagName', {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedByTagName;
  }
});
Object.defineProperty(exports, 'untilElementLocatedByName', {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedByName;
  }
});
Object.defineProperty(exports, 'untilElementLocatedById', {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedById;
  }
});
Object.defineProperty(exports, 'untilElementLocatedByClass', {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedByClass;
  }
});
Object.defineProperty(exports, 'untilElementLocated', {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocated;
  }
});

var _url = require('./url');

Object.defineProperty(exports, 'getCurrentUrl', {
  enumerable: true,
  get: function get() {
    return _url.getCurrentUrl;
  }
});
Object.defineProperty(exports, 'untilUrlContains', {
  enumerable: true,
  get: function get() {
    return _url.untilUrlContains;
  }
});
Object.defineProperty(exports, 'untilUrlIs', {
  enumerable: true,
  get: function get() {
    return _url.untilUrlIs;
  }
});
Object.defineProperty(exports, 'untilUrlMatches', {
  enumerable: true,
  get: function get() {
    return _url.untilUrlMatches;
  }
});

var _utilities = require('./utilities');

Object.defineProperty(exports, 'clickElement', {
  enumerable: true,
  get: function get() {
    return _utilities.clickElement;
  }
});
Object.defineProperty(exports, 'getAttribute', {
  enumerable: true,
  get: function get() {
    return _utilities.getAttribute;
  }
});
Object.defineProperty(exports, 'getCssValue', {
  enumerable: true,
  get: function get() {
    return _utilities.getCssValue;
  }
});
Object.defineProperty(exports, 'getElementText', {
  enumerable: true,
  get: function get() {
    return _utilities.getElementText;
  }
});
Object.defineProperty(exports, 'isSelected', {
  enumerable: true,
  get: function get() {
    return _utilities.isSelected;
  }
});
Object.defineProperty(exports, 'isDisplayed', {
  enumerable: true,
  get: function get() {
    return _utilities.isDisplayed;
  }
});
Object.defineProperty(exports, 'navigateBack', {
  enumerable: true,
  get: function get() {
    return _utilities.navigateBack;
  }
});
Object.defineProperty(exports, 'navigateForward', {
  enumerable: true,
  get: function get() {
    return _utilities.navigateForward;
  }
});
Object.defineProperty(exports, 'navigateTo', {
  enumerable: true,
  get: function get() {
    return _utilities.navigateTo;
  }
});
Object.defineProperty(exports, 'refreshPage', {
  enumerable: true,
  get: function get() {
    return _utilities.refreshPage;
  }
});
Object.defineProperty(exports, 'getTitle', {
  enumerable: true,
  get: function get() {
    return _utilities.getTitle;
  }
});
Object.defineProperty(exports, 'switchToFrame', {
  enumerable: true,
  get: function get() {
    return _utilities.switchToFrame;
  }
});
Object.defineProperty(exports, 'switchToDefaultContent', {
  enumerable: true,
  get: function get() {
    return _utilities.switchToDefaultContent;
  }
});
Object.defineProperty(exports, 'closeBrowser', {
  enumerable: true,
  get: function get() {
    return _utilities.closeBrowser;
  }
});
Object.defineProperty(exports, 'closeCurrentWindow', {
  enumerable: true,
  get: function get() {
    return _utilities.closeCurrentWindow;
  }
});
Object.defineProperty(exports, 'takeScreenshot', {
  enumerable: true,
  get: function get() {
    return _utilities.takeScreenshot;
  }
});

var _executeScript = require('./executeScript');

Object.defineProperty(exports, 'scrollBy', {
  enumerable: true,
  get: function get() {
    return _executeScript.scrollBy;
  }
});
Object.defineProperty(exports, 'scrollTo', {
  enumerable: true,
  get: function get() {
    return _executeScript.scrollTo;
  }
});