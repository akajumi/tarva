const config = projectName => {
  return {
    id: projectName,
    description: 'Lorem ipsum dolor sit amet.',
    viewports: [
      {
        label: 'phone',
        width: 480,
        height: 600
      },
      {
        label: 'tablet-portrair',
        width: 768,
        height: 1024
      },
      {
        label: 'tablet-landscape',
        width: 1024,
        height: 768
      },
      {
        label: 'laptop',
        width: 1280,
        height: 800
      },
      {
        label: 'desktop',
        width: 1920,
        height: 1080
      }
    ],
    scenarios: [
      {
        label: 'Adimedia homepage', // [required] Tag saved with your reference images
        url: 'https://www.adimedia.net/',
        referenceUrl: '', // Specify a different state or environment when creating reference.
        selectors: ['document'], // Array of selectors to capture. Defaults to document if omitted. Use "viewport" to capture the viewport size. See Targeting elements in the next section for more info... OPTIONS: document, viewport, #myFeature, etc
        selectorExpansion: true, // Set selectorExpansion to true to find and take screenshots of all matching selector
        hideSelectors: [], // Array of selectors set to visibility: hidden
        removeSelectors: [], // Array of selectors set to display: none

        readyEvent: '', // Wait until this string has been logged to the console.
        readySelector: '', // Wait until this selector exists before continuing.
        delay: 0, //delay in ms

        onBeforeScript: '', // Runs before each scenario -- use for setting cookies or other env state
        onReadyScript: '', // Runs after onReady event on all scenarios -- use for simulating interactions

        clickSelector: '', // Click the specified DOM element prior to screen shot (available with default onReadyScript)
        hoverSelector: '', //Move the pointer over the specified DOM element prior to screen shot (available with default onReadyScript)
        postInteractionWait: '', // Wait for a selector after interacting with hoverSelector or clickSelector (optionally accepts wait time in ms. Idea for use with a click or hover element transition. available with default onReadyScript)

        cookiePath: 'data/' + projectName + '/backstop_data/engine_scripts/cookies.json',
        misMatchThreshold: 0.1, // Percentage of different pixels allowed to pass test
        requireSameDimensions: true // If set to true -- any change in selector size will trigger a test failure.
      },

      {
        label: 'Adimedia equipo', // [required] Tag saved with your reference images
        url: 'https://www.adimedia.net/agencia/equipo/',
        referenceUrl: '', // Specify a different state or environment when creating reference.
        selectors: ['document'], // Array of selectors to capture. Defaults to document if omitted. Use "viewport" to capture the viewport size. See Targeting elements in the next section for more info... OPTIONS: document, viewport, #myFeature, etc
        selectorExpansion: true, // Set selectorExpansion to true to find and take screenshots of all matching selector
        hideSelectors: [], // Array of selectors set to visibility: hidden
        removeSelectors: [], // Array of selectors set to display: none

        readyEvent: '', // Wait until this string has been logged to the console.
        readySelector: '', // Wait until this selector exists before continuing.
        delay: 0, //delay in ms

        onBeforeScript: '', // Runs before each scenario -- use for setting cookies or other env state
        onReadyScript: '', // Runs after onReady event on all scenarios -- use for simulating interactions

        clickSelector: '', // Click the specified DOM element prior to screen shot (available with default onReadyScript)
        hoverSelector: '', //Move the pointer over the specified DOM element prior to screen shot (available with default onReadyScript)
        postInteractionWait: '', // Wait for a selector after interacting with hoverSelector or clickSelector (optionally accepts wait time in ms. Idea for use with a click or hover element transition. available with default onReadyScript)

        cookiePath: 'data/' + projectName + '/backstop_data/engine_scripts/cookies.json',
        misMatchThreshold: 0.1, // Percentage of different pixels allowed to pass test
        requireSameDimensions: true // If set to true -- any change in selector size will trigger a test failure.
      }
    ],
    paths: {
      bitmaps_reference: 'data/' + projectName + '/backstop_data/bitmaps_reference',
      bitmaps_test: 'data/' + projectName + '/backstop_data/bitmaps_test',
      engine_scripts: 'data/' + projectName + '/backstop_data/engine_scripts',
      html_report: 'data/' + projectName + '/backstop_data/html_report',
      ci_report: 'data/' + projectName + '/backstop_data/ci_report'
    },
    report: [], // 'browser', 'CI'
    engine: 'chrome', // Chrome headless
    engineFlags: [],
    asyncCaptureLimit: 5, // Capturing screens in parallel
    asyncCompareLimit: 50, // Comparing screens in parallel
    debug: false,
    debugWindow: false
  }
}

export default config
