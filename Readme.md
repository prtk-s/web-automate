
# web-automate

web-automate is a browser automation library. Used for testing
web applications with selenium. web-automate provides you to use some selenium functionality in a easy way. By using web-automate you can do fast and clean code at some level.

## Installation

web-automate may be installed via npm with

    npm install web-automate

To use web-automate you don't need to download additional resources. You will only need the selenium-webdriver and drivers for Chrome, Firefox, and Microsoft's IE and Edge web
browsers are all standalone executables that should be placed on your system
[PATH].


| Browser           | Component                          |
| ----------------- | ---------------------------------- |
| Chrome            | [chromedriver(.exe)][chrome]       |
| Firefox           | [geckodriver(.exe)][geckodriver]   |
| Edge              | [MicrosoftWebDriver.msi][edge]     |
| Internet Explorer | [IEDriverServer.exe][release]      |
| Safari            | [safaridriver]                     |

## Usage

The sample below and others are included in the `example` directory. You may
also find the web-driver informative by using selenium-webdriver.

```javascript
const { Builder } = require('selenium-webdriver');
const { findElement, closeBrowser, navigateTo } = require('web-automate');
(async function example() {
  let driver = await new Builder().forBrowser('chromes').build();
  try {
    await navigateTo(driver, 'http://www.google.com/ncr');
    const webElement = await findElement(driver, { name: 'q'});
    webElement.sendKeys('Hello World');
  } finally {
    await closeBrowser(driver);
  }
})();
```
## Documentation

API documentation is available online from the [web-automate project][api].

## Node Support Policy

web-automate supports same versions of the node as selenium-webdriver.

## Issues

Please report any issues using the [web-automate issue tracker][issues]. When using
the issue tracker

- Include complete details about the issue.
- You can include a link to a [gist](http://gist.github.com/) with any stack traces/logs (and you can also attach these directly to the bug
    report).
- Your bug report will be closed if you do not provide enough
    information abut the issue.
- Please only open new issue and reference the original issue in your report.

[PATH]: http://en.wikipedia.org/wiki/PATH_%28variable%29
[api]: https://prtk-s.github.io/web-automate/
[chrome]: http://chromedriver.storage.googleapis.com/index.html
[issues]: https://github.com/prtk-s/web-automate/issues
[edge]: http://go.microsoft.com/fwlink/?LinkId=619687
[geckodriver]: https://github.com/mozilla/geckodriver/releases/
[release]: http://selenium-release.storage.googleapis.com/index.html
[safaridriver]: https://developer.apple.com/library/prerelease/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html#//apple_ref/doc/uid/TP40014305-CH11-DontLinkElementID_28
