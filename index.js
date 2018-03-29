const express = require('express')
const bodyParser = require('body-parser')
// const fs = require('fs-extra')
// const cmd = require('node-cmd')
const backstop = require('backstopjs')

//creates in $base the directory $dirname; Returns string message
let createDir = (base, dirname) => {
  //include the fs, path modules
  let fs = require('fs')
  let path = require('path')
  let dir = path.resolve(base, dirname)
  let response = {
    path: dir,
    created: false,
    description: 'The directory: ' + dir + '/ already exists'
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, '0755')

    if (fs.existsSync(dir)) {
      response = {
        path: dir,
        created: true,
        description: 'The directory: ' + dir + ' was succesfully created'
      }
    } else {
      response = {
        path: dir,
        created: false,
        description: 'Unable to create: ' + dir
      }
    }
  }

  return response
}

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
  res.send('Hello World')
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
      onBeforeScript: 'chromy/onBefore.js',
      onReadyScript: 'chromy/onReady.js',
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
      onBeforeScript: 'chromy/onBefore.js',
      onReadyScript: 'chromy/onReady.js',
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

app.get('/projects/:project', function(req, res) {
  // console.log('================================================')
  // console.log('REQUEST PARAM')
  // console.log(req.params.project)

  const projectName = req.params.project
  const projectsDirectory = __dirname + '/projects'

  //creates a folder called 'newdir' in the directory where this file is located
  const mkdir = createDir(projectsDirectory, projectName)

  if (mkdir.created) {
    console.log('mkdir.path :: ' + mkdir.path)
  }

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
      onBeforeScript: 'chromy/onBefore.js',
      onReadyScript: 'chromy/onReady.js',
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
      res.send(mkdir)
    })
    .catch(() => {
      res.send(mkdir)
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
      onBeforeScript: 'chromy/onBefore.js',
      onReadyScript: 'chromy/onReady.js',
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
      onBeforeScript: 'chromy/onBefore.js',
      onReadyScript: 'chromy/onReady.js',
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
