const fs = require('fs-extra')
const path = require('path')
const { readdirSync } = require('fs')

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

module.exports = {
  createDir,
  listDir
}
