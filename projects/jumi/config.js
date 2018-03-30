const config = options => {
  const projectName = options.projectName

  return {
    id: 'backstop_' + projectName,
    viewports: [
      {
        label: 'phone',
        width: 320,
        height: 480
      },
      {
        label: 'tablet',
        width: 1024,
        height: 768
      },
      {
        label: 'desktop',
        width: 1280,
        height: 768
      }
    ],
    onBeforeScript: '',
    onReadyScript: '',
    scenarios: [
      {
        label: 'Test',
        cookiePath:
          'projects/' +
          projectName +
          '/backstop_data/engine_scripts/cookies.json',
        url: 'https://www.sansebastianturismo.com/es/',
        referenceUrl: '',
        readyEvent: '',
        readySelector: '',
        delay: 0,
        hideSelectors: [],
        removeSelectors: [],
        hoverSelector: '',
        clickSelector: '',
        postInteractionWait: 0,
        selectors: ['document'],
        selectorExpansion: true,
        misMatchThreshold: 0.1,
        requireSameDimensions: true
      }
    ],
    paths: {
      bitmaps_reference:
        'data/' + projectName + '/backstop_data/bitmaps_reference',
      bitmaps_test: 'data/' + projectName + '/backstop_data/bitmaps_test',
      engine_scripts: 'data/' + projectName + '/backstop_data/engine_scripts',
      html_report: 'data/' + projectName + '/backstop_data/html_report',
      ci_report: 'data/' + projectName + '/backstop_data/ci_report'
    },
    report: ['browser', 'CI'],
    engine: 'chrome',
    engineFlags: [],
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false
  }
}

module.exports = config
