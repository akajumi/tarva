const backstop = require('backstopjs')
const express = require('express')
const bodyParser = require('body-parser')
const PROJECTS_DIRECTORY = __dirname + '/projects'
const filesystem = require('./server/filesystem')

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

app.get('/projects', function(req, res) {
  const projects = filesystem.listDir(PROJECTS_DIRECTORY)

  res.send(projects)
})

app.get('/projects/:project', function(req, res) {
  const projectName = req.params.project
  const mkdir = filesystem.createDir(PROJECTS_DIRECTORY, projectName)

  res.send(mkdir)
})

app.get('/projects/:project/reference', function(req, res) {
  const projectName = req.params.project
  const configPath = './projects/' + projectName + '/config.js'

  backstop('reference', {
    config: require(configPath)({
      projectName: projectName
    })
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
  const configPath = './projects/' + projectName + '/config.js'

  backstop('test', {
    config: require(configPath)({
      projectName: projectName
    })
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
  const configPath = './projects/' + projectName + '/config.js'

  backstop('approve', {
    config: require(configPath)({
      projectName: projectName
    })
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
  const configPath = './projects/' + projectName + '/config.js'

  backstop('openReport', {
    config: require(configPath)({
      projectName: projectName
    })
  })
    .then(() => {
      res.send(true)
    })
    .catch(() => {
      res.send(false)
    })
})

const server = app.listen(3030, function() {
  console.log('Listening on port %s...', server.address().port)
})
