const fs = require('fs-extra')
const path = require('path')
const { readdirSync, writeFile } = require('fs')
const CONFIG_FILE = './config.js'
const defaultConfig = require('./config')

const listDir = source => {
  const list = readdirSync(source)

  const response = {
    projects: list
  }

  return response
}

const createDir = (base, dirname) => {
  const dir = path.resolve(base, dirname)
  let response = {
    path: dir,
    created: false,
    description: 'The project "' + dirname + '" already exists.'
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, '0755')

    if (fs.existsSync(dir)) {
      response = {
        path: dir,
        created: true,
        description: 'The project "' + dirname + '" was succesfully created.'
      }

      createConfig(base, dirname)
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

const createConfig = (base, dirname) => {
  const configfile = path.resolve(base, dirname, CONFIG_FILE)
  const config = defaultConfig(dirname)
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
  createDir,
  createConfig
}
