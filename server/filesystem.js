const fs = require('fs-extra')
const path = require('path')
const decache = require('decache')
const { readdirSync, writeFile } = require('fs')
const CONFIG_FILE = './config.js'
const defaultConfig = require('./config')

const listDir = source => {
  const list = readdirSync(source)

  const listComplete = list.map(project => {
    const projectName = project
    const configPath = '../projects/' + projectName + '/config.js'
    decache(configPath)
    const projectConfig = require(configPath)
    const config = projectConfig()

    const result = {
      id: config.id,
      description: config.description
    }

    return result
  })

  const response = {
    projects: listComplete
  }

  return response
}

const createProject = (base, dirname, description) => {
  const response = createDir(base, dirname)

  if (response.created) {
    createConfig(base, dirname, description)
  }

  return response
}

const createDir = (base, dirname) => {
  const dir = path.resolve(base, dirname)
  let response

  if (fs.existsSync(dir)) {
    response = {
      path: dir,
      created: false,
      description: 'The project "' + dirname + '" already exists.'
    }
  } else {
    fs.mkdirSync(dir, '0755')

    if (fs.existsSync(dir)) {
      response = {
        path: dir,
        created: true,
        description: 'The project "' + dirname + '" was succesfully created.'
      }
    } else {
      response = {
        path: dir,
        created: false,
        description: 'Unable to create project "' + dirname + '".'
      }
    }
  }

  return response
}

const createConfig = (base, dirname, description) => {
  const configfile = path.resolve(base, dirname, CONFIG_FILE)
  let config = defaultConfig(dirname)
  config['description'] = description
  const json = JSON.stringify(config)
  let configModule =
    'const config = () => { return ' + json + '}\r\nmodule.exports = config'

  writeFile(configfile, configModule, 'utf8', err => {
    if (err) throw err
  })

  return configfile
}

const updateConfig = (base, dirname, config) => {
  const configfile = path.resolve(base, dirname, CONFIG_FILE)
  const json = JSON.stringify(config)
  let configModule =
    'const config = () => { return ' + json + '}\r\nmodule.exports = config'

  writeFile(configfile, configModule, 'utf8', err => {
    if (err) throw err
  })

  return configfile
}

module.exports = {
  listDir,
  createProject,
  createConfig,
  updateConfig
}
