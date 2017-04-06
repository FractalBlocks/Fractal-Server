import http = require('http')
import { run } from 'fractal-core'
import { sendMsg } from 'fractal-core/utils/component'
import root from './root'

const app = run({
  root,
  groups: {},
  tasks: {
    httpResponse: mod => ({
      state: {},
      handle: msg => {
        res.write(msg)
        res.end()
      },
      dispose: () => {},
    }),
  },
  interfaces: {
  },
})

var res

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'})
  res = response
  console.log(request.url)
  try {
    sendMsg(app, 'Root', request.url, '')
  } catch (e) {

  }
})

server.listen(3005)
console.log('Server is listening')
