// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.elementPresent('#nav > a:nth-child(2)')
      .click('#nav > a:nth-child(2)')
      browser.pause(10000)
      browser.keys([browser.Keys.CONTROL, 'a', browser.Keys.NULL])
      browser.pause(3000)
      .end()
  }
}
