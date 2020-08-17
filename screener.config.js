module.exports = {
  // full repository name for your project:
  projectRepo: 'billmeyer/angular-cli',

  apiKey: process.env.SCREENER_API_KEY,
  storybookConfigDir: '.storybook',
  resolution: '1024x768',
  // newSessionForEachState: true,

  sauce: {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    maxConcurrent: 10, // optional available concurrency you have from Sauce Labs
    // extendedDebugging: true, // optional
    // parentTunnel: 'some-parent-username'
    // tunnelIdentifier: 'qa-vdc-1', // optional
    launchSauceConnect: false // have screener-runner manage my sauce connect tunnels for me
  },

  browsers: [
    {
      browserName: 'chrome',
      version: '78.0'
    },
    // {
    //     browserName: 'firefox'
    // }
    // {
    //   browserName: 'safari',
    //   version: '11.1'
    // }
  ]
};
