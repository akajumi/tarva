const express = require('express')
const bodyParser = require('body-parser')
const backstop = require('backstopjs')
const createDir = require('./server/createDir')

const PROJECTS_DIRECTORY = __dirname + '/projects'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Authorization, Accept'
  )
  next()
})

app.get('/', function(req, res) {
  res.send('Tarva API server.')
})

app.get('/projects/:project', function(req, res) {
  const projectName = req.params.project
  const mkdir = createDir.create(PROJECTS_DIRECTORY, projectName)

  res.send(mkdir)
})

app.get('/projects/:project/reference', function(req, res) {
  const projectName = req.params.project

  backstop('reference', {
    config: {
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
          label: 'Test project 0',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: ['.jumbotron'],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        },
        {
          label: 'Test project 1',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: [],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        },
        {
          label: 'Test project 2',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index2.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: [],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        }
      ],
      paths: {
        bitmaps_reference:
          'projects/' + projectName + '/backstop_data/bitmaps_reference',
        bitmaps_test: 'projects/' + projectName + '/backstop_data/bitmaps_test',
        engine_scripts:
          'projects/' + projectName + '/backstop_data/engine_scripts',
        html_report: 'projects/' + projectName + '/backstop_data/html_report',
        ci_report: 'projects/' + projectName + '/backstop_data/ci_report'
      },
      report: ['browser', 'CI'],
      engine: 'chrome',
      engineFlags: [],
      asyncCaptureLimit: 5,
      asyncCompareLimit: 50,
      debug: false,
      debugWindow: false
    }
  })
    .then(() => {
      res.send(true)
    })
    .catch(() => {
      res.send(false)
    })
})

app.get('/projects/:project/test', function(req, res) {
  const projectName = req.params.project

  backstop('test', {
    config: {
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
          label: 'Test project 0',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: ['.jumbotron'],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        },
        {
          label: 'Test project 1',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: [],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        },
        {
          label: 'Test project 2',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index2.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: [],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        }
      ],
      paths: {
        bitmaps_reference:
          'projects/' + projectName + '/backstop_data/bitmaps_reference',
        bitmaps_test: 'projects/' + projectName + '/backstop_data/bitmaps_test',
        engine_scripts:
          'projects/' + projectName + '/backstop_data/engine_scripts',
        html_report: 'projects/' + projectName + '/backstop_data/html_report',
        ci_report: 'projects/' + projectName + '/backstop_data/ci_report'
      },
      report: ['browser', 'CI'],
      engine: 'chrome',
      engineFlags: [],
      asyncCaptureLimit: 5,
      asyncCompareLimit: 50,
      debug: false,
      debugWindow: false
    }
  })
    .then(() => {
      res.send(true)
    })
    .catch(() => {
      res.send(false)
    })
})

app.get('/projects/:project/approve', function(req, res) {
  const projectName = req.params.project

  backstop('approve', {
    config: {
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
          label: 'Test project 0',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: ['.jumbotron'],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        },
        {
          label: 'Test project 1',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: [],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        },
        {
          label: 'Test project 2',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index2.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: [],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        }
      ],
      paths: {
        bitmaps_reference:
          'projects/' + projectName + '/backstop_data/bitmaps_reference',
        bitmaps_test: 'projects/' + projectName + '/backstop_data/bitmaps_test',
        engine_scripts:
          'projects/' + projectName + '/backstop_data/engine_scripts',
        html_report: 'projects/' + projectName + '/backstop_data/html_report',
        ci_report: 'projects/' + projectName + '/backstop_data/ci_report'
      },
      report: ['browser', 'CI'],
      engine: 'chrome',
      engineFlags: [],
      asyncCaptureLimit: 5,
      asyncCompareLimit: 50,
      debug: false,
      debugWindow: false
    }
  })
    .then(() => {
      res.send(true)
    })
    .catch(() => {
      res.send(false)
    })
})

app.get('/projects/:project/report', function(req, res) {
  const projectName = req.params.project

  backstop('openReport', {
    config: {
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
          label: 'Test project 0',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: ['.jumbotron'],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        },
        {
          label: 'Test project 1',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: [],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        },
        {
          label: 'Test project 2',
          cookiePath:
            'projects/' +
            projectName +
            '/backstop_data/engine_scripts/cookies.json',
          url: 'file:///C:/TRABAJO/tarva/myCoolProject/index2.html',
          referenceUrl: '',
          readyEvent: '',
          readySelector: '',
          delay: 0,
          hideSelectors: [],
          removeSelectors: [],
          hoverSelector: '',
          clickSelector: '',
          postInteractionWait: 0,
          selectors: [],
          selectorExpansion: true,
          misMatchThreshold: 0.1,
          requireSameDimensions: true
        }
      ],
      paths: {
        bitmaps_reference:
          'projects/' + projectName + '/backstop_data/bitmaps_reference',
        bitmaps_test: 'projects/' + projectName + '/backstop_data/bitmaps_test',
        engine_scripts:
          'projects/' + projectName + '/backstop_data/engine_scripts',
        html_report: 'projects/' + projectName + '/backstop_data/html_report',
        ci_report: 'projects/' + projectName + '/backstop_data/ci_report'
      },
      report: ['browser', 'CI'],
      engine: 'chrome',
      engineFlags: [],
      asyncCaptureLimit: 5,
      asyncCompareLimit: 50,
      debug: false,
      debugWindow: false
    }
  })
    .then(() => {
      res.send(true)
    })
    .catch(() => {
      res.send(false)
    })
})

var server = app.listen(3030, function() {
  console.log('Listening on port %s...', server.address().port)
})
