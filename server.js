const backstop = require('backstopjs')
const express = require('express')
const bodyParser = require('body-parser')
const PROJECTS_DIRECTORY = __dirname + '/projects'
const filesystem = require('./server/filesystem')
const app = express()

// To serve static pages
app.use(express.static(__dirname + '/data'))
app.use(express.static(__dirname + '/build'))

// API server
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

// API root. Just a message
app.get('/api/', function(req, res) {
  res.send('VeRTa API server.')
})

// List of projects
app.get('/api/projects', function(req, res) {
  const projects = filesystem.listDir(PROJECTS_DIRECTORY)

  res.send(projects)
})

// Create new project (directory and config file)
app.post('/api/projects/:project', function(req, res) {
  const projectName = req.params.project
  const projectDescription = req.body.description

  const mkdir = filesystem.createProject(
    PROJECTS_DIRECTORY,
    projectName,
    projectDescription
  )

  res.send(mkdir)
})

// Create project's reference
app.get('/api/projects/:project/reference', function(req, res) {
  const projectName = req.params.project
  const configPath = './projects/' + projectName + '/config.js'
  const projectConfig = require(configPath)

  backstop('reference', {
    config: projectConfig()
  })
    .then(() => {
      res.send(true)
    })
    .catch(() => {
      res.send(false)
    })
})

// Create project's test files
app.get('/api/projects/:project/test', function(req, res) {
  const projectName = req.params.project
  const configPath = './projects/' + projectName + '/config.js'
  const projectConfig = require(configPath)

  backstop('test', {
    config: projectConfig()
  })
    .then(() => {
      res.send(true)
    })
    .catch(() => {
      res.send(false)
    })
})

// Approve project's test files
app.get('/api/projects/:project/approve', function(req, res) {
  const projectName = req.params.project
  const configPath = './projects/' + projectName + '/config.js'
  const projectConfig = require(configPath)

  backstop('approve', {
    config: projectConfig()
  })
    .then(() => {
      res.send(true)
    })
    .catch(() => {
      res.send(false)
    })
})

// Show project's report
app.get('/api/projects/:project/report', function(req, res) {
  const projectName = req.params.project
  const configPath = './projects/' + projectName + '/config.js'
  const projectConfig = require(configPath)

  backstop('openReport', {
    config: projectConfig()
  })
    .then(() => {
      res.send('Report in new tab.')
    })
    .catch(() => {
      res.send(false)
    })
})

const server = app.listen(3000, function() {
  console.log('Listening on port %s...', server.address().port)
})
