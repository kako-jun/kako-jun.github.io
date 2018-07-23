
require 'webrick'

server = WEBrick::HTTPServer.new({
  DocumentRoot: '.',
  BindAddress:  '0.0.0.0',
  Port:         4200,
})

server.start
