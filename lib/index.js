"use strict";

/**
 * @file web-automate
 * @description web-automate is a browser automation library. Used for testing web-applications
 * with selenium. web-automate allows you to use some selenium functionality in a easy manner.
 * By using web-automate you can do fast and clean code at some level.
 * @author Parteek
 * @version 1.1.4
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var isEmpty = require("lodash/isEmpty");

var _require = require("../utility"),
  WEBDRIVER_CONSTANT = _require.WEBDRIVER_CONSTANT,
  undefinedFieldError = _require.undefinedFieldError;

var _findElement = require("./findElement");

Object.defineProperty(exports, "findElement", {
  enumerable: true,
  get: function get() {
    return _findElement.findElement;
  }
});
Object.defineProperty(exports, "findElementByXpath", {
  enumerable: true,
  get: function get() {
    return _findElement.findElementByXpath;
  }
});
Object.defineProperty(exports, "findElementByTagName", {
  enumerable: true,
  get: function get() {
    return _findElement.findElementByTagName;
  }
});
Object.defineProperty(exports, "findElementByName", {
  enumerable: true,
  get: function get() {
    return _findElement.findElementByName;
  }
});
Object.defineProperty(exports, "findElementById", {
  enumerable: true,
  get: function get() {
    return _findElement.findElementById;
  }
});
Object.defineProperty(exports, "findElementByClass", {
  enumerable: true,
  get: function get() {
    return _findElement.findElementByClass;
  }
});

var _findElements = require("./findElements");

Object.defineProperty(exports, "findElements", {
  enumerable: true,
  get: function get() {
    return _findElements.findElements;
  }
});
Object.defineProperty(exports, "findElementsByXpath", {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsByXpath;
  }
});
Object.defineProperty(exports, "findElementsByTagName", {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsByTagName;
  }
});
Object.defineProperty(exports, "findElementsByName", {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsByName;
  }
});
Object.defineProperty(exports, "findElementsById", {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsById;
  }
});
Object.defineProperty(exports, "findElementsByClass", {
  enumerable: true,
  get: function get() {
    return _findElements.findElementsByClass;
  }
});

var _untilElementsLocated = require("./untilElementsLocated");

Object.defineProperty(exports, "untilElementsLocatedByXpath", {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedByXpath;
  }
});
Object.defineProperty(exports, "untilElementsLocatedByTagName", {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedByTagName;
  }
});
Object.defineProperty(exports, "untilElementsLocatedByName", {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedByName;
  }
});
Object.defineProperty(exports, "untilElementsLocatedById", {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedById;
  }
});
Object.defineProperty(exports, "untilElementsLocatedByClass", {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocatedByClass;
  }
});
Object.defineProperty(exports, "untilElementsLocated", {
  enumerable: true,
  get: function get() {
    return _untilElementsLocated.untilElementsLocated;
  }
});

var _untilElementLocated = require("./untilElementLocated");

Object.defineProperty(exports, "untilElementLocatedByXpath", {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedByXpath;
  }
});
Object.defineProperty(exports, "untilElementLocatedByTagName", {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedByTagName;
  }
});
Object.defineProperty(exports, "untilElementLocatedByName", {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedByName;
  }
});
Object.defineProperty(exports, "untilElementLocatedById", {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedById;
  }
});
Object.defineProperty(exports, "untilElementLocatedByClass", {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocatedByClass;
  }
});
Object.defineProperty(exports, "untilElementLocated", {
  enumerable: true,
  get: function get() {
    return _untilElementLocated.untilElementLocated;
  }
});

var _url = require("./url");

Object.defineProperty(exports, "getCurrentUrl", {
  enumerable: true,
  get: function get() {
    return _url.getCurrentUrl;
  }
});
Object.defineProperty(exports, "untilUrlContains", {
  enumerable: true,
  get: function get() {
    return _url.untilUrlContains;
  }
});
Object.defineProperty(exports, "untilUrlIs", {
  enumerable: true,
  get: function get() {
    return _url.untilUrlIs;
  }
});
Object.defineProperty(exports, "untilUrlMatches", {
  enumerable: true,
  get: function get() {
    return _url.untilUrlMatches;
  }
});

var _utilities = require("./utilities");

Object.defineProperty(exports, "clickElement", {
  enumerable: true,
  get: function get() {
    return _utilities.clickElement;
  }
});
Object.defineProperty(exports, "getAttribute", {
  enumerable: true,
  get: function get() {
    return _utilities.getAttribute;
  }
});
Object.defineProperty(exports, "getCssValue", {
  enumerable: true,
  get: function get() {
    return _utilities.getCssValue;
  }
});
Object.defineProperty(exports, "getElementText", {
  enumerable: true,
  get: function get() {
    return _utilities.getElementText;
  }
});
Object.defineProperty(exports, "isSelected", {
  enumerable: true,
  get: function get() {
    return _utilities.isSelected;
  }
});
Object.defineProperty(exports, "isDisplayed", {
  enumerable: true,
  get: function get() {
    return _utilities.isDisplayed;
  }
});
Object.defineProperty(exports, "navigateBack", {
  enumerable: true,
  get: function get() {
    return _utilities.navigateBack;
  }
});
Object.defineProperty(exports, "navigateForward", {
  enumerable: true,
  get: function get() {
    return _utilities.navigateForward;
  }
});
Object.defineProperty(exports, "navigateTo", {
  enumerable: true,
  get: function get() {
    return _utilities.navigateTo;
  }
});
Object.defineProperty(exports, "refreshPage", {
  enumerable: true,
  get: function get() {
    return _utilities.refreshPage;
  }
});
Object.defineProperty(exports, "getTitle", {
  enumerable: true,
  get: function get() {
    return _utilities.getTitle;
  }
});
Object.defineProperty(exports, "switchToFrame", {
  enumerable: true,
  get: function get() {
    return _utilities.switchToFrame;
  }
});
Object.defineProperty(exports, "switchToDefaultContent", {
  enumerable: true,
  get: function get() {
    return _utilities.switchToDefaultContent;
  }
});
Object.defineProperty(exports, "closeBrowser", {
  enumerable: true,
  get: function get() {
    return _utilities.closeBrowser;
  }
});
Object.defineProperty(exports, "closeCurrentWindow", {
  enumerable: true,
  get: function get() {
    return _utilities.closeCurrentWindow;
  }
});
Object.defineProperty(exports, "takeScreenshot", {
  enumerable: true,
  get: function get() {
    return _utilities.takeScreenshot;
  }
});

var _executeScript = require("./executeScript");

Object.defineProperty(exports, "scrollBy", {
  enumerable: true,
  get: function get() {
    return _executeScript.scrollBy;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _executeScript.scrollTo;
  }
});

function binder(driver) {
  try {
    if (isEmpty(driver)) throw undefinedFieldError(WEBDRIVER_CONSTANT.DRIVER);
    return {
      untilElementsLocatedByXpath: _untilElementsLocated.untilElementsLocatedByXpath.bind(
        this,
        driver
      ),
      untilElementsLocatedByTagName: _untilElementsLocated.untilElementsLocatedByTagName.bind(
        this,
        driver
      ),
      untilElementsLocatedByName: _untilElementsLocated.untilElementsLocatedByName.bind(
        this,
        driver
      ),
      untilElementsLocatedById: _untilElementsLocated.untilElementsLocatedById.bind(
        this,
        driver
      ),
      untilElementsLocatedByClass: _untilElementsLocated.untilElementsLocatedByClass.bind(
        this,
        driver
      ),
      untilElementsLocated: _untilElementsLocated.untilElementsLocated.bind(
        this,
        driver
      ),
      untilElementLocatedByXpath: _untilElementLocated.untilElementLocatedByXpath.bind(
        this,
        driver
      ),
      untilElementLocatedByTagName: _untilElementLocated.untilElementLocatedByTagName.bind(
        this,
        driver
      ),
      untilElementLocatedByName: _untilElementLocated.untilElementLocatedByName.bind(
        this,
        driver
      ),
      untilElementLocatedById: _untilElementLocated.untilElementLocatedById.bind(
        this,
        driver
      ),
      untilElementLocatedByClass: _untilElementLocated.untilElementLocatedByClass.bind(
        this,
        driver
      ),
      untilElementLocated: _untilElementLocated.untilElementLocated.bind(
        this,
        driver
      ),
      findElement: _findElement.findElement.bind(this, driver),
      findElementByXpath: _findElement.findElementByXpath.bind(this, driver),
      findElementByTagName: _findElement.findElementByTagName.bind(
        this,
        driver
      ),
      findElementByName: _findElement.findElementByName.bind(this, driver),
      findElementById: _findElement.findElementById.bind(this, driver),
      findElementByClass: _findElement.findElementByClass.bind(this, driver),
      findElements: _findElements.findElements.bind(this, driver),
      findElementsByXpath: _findElements.findElementsByXpath.bind(this, driver),
      findElementsByTagName: _findElements.findElementsByTagName.bind(
        this,
        driver
      ),
      findElementsByName: _findElements.findElementsByName.bind(this, driver),
      findElementsById: _findElements.findElementsById.bind(this, driver),
      findElementsByClass: _findElements.findElementsByClass.bind(this, driver),
      getCurrentUrl: _url.getCurrentUrl.bind(this, driver),
      untilUrlContains: _url.untilUrlContains.bind(this, driver),
      untilUrlIs: _url.untilUrlIs.bind(this, driver),
      untilUrlMatches: _url.untilUrlMatches.bind(this, driver),
      clickElement: _utilities.clickElement.bind(this, driver),
      getCssValue: _utilities.getCssValue.bind(this, driver),
      getElementText: _utilities.getElementText.bind(this, driver),
      isSelected: _utilities.isSelected.bind(this, driver),
      isDisplayed: _utilities.isDisplayed.bind(this, driver),
      navigateBack: _utilities.navigateBack.bind(this, driver),
      navigateForward: _utilities.navigateForward.bind(this, driver),
      navigateTo: _utilities.navigateTo.bind(this, driver),
      refreshPage: _utilities.refreshPage.bind(this, driver),
      getTitle: _utilities.getTitle.bind(this, driver),
      switchToFrame: _utilities.switchToFrame.bind(this, driver),
      switchToDefaultContent: _utilities.switchToDefaultContent.bind(
        this,
        driver
      ),
      getAttribute: _utilities.getAttribute.bind(this, driver),
      closeBrowser: _utilities.closeBrowser.bind(this, driver),
      closeCurrentWindow: _utilities.closeCurrentWindow.bind(this, driver),
      takeScreenshot: _utilities.takeScreenshot.bind(this, driver),
      scrollBy: _executeScript.scrollBy.bind(this, driver),
      scrollTo: _executeScript.scrollTo.bind(this, driver)
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

Object.defineProperty(exports, "binder", {
  enumerable: true,
  get: function get() {
    return binder;
  }
});
