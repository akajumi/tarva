const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs-extra')

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
    fs.mkdirSync(dir, 0755)

    response = fs.existsSync(dir)
      ? {
          path: dir,
          created: true,
          description: 'The directory: ' + dir + ' was succesfully created'
        }
      : {
          path: dir,
          created: false,
          description: 'Unable to create: ' + dir
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

app.get('/projects/project', function(req, res) {
  //creates a folder called 'newdir' in the directory where this file is located
  var mkdir = createDir(__dirname, 'newdir2')
  console.log(mkdir)

  res.send(mkdir)
})

var server = app.listen(3030, function() {
  console.log('Listening on port %s...', server.address().port)
})
