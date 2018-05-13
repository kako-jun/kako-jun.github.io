
require 'webrick'

server = WEBrick::HTTPServer.new({
  DocumentRoot: './games/h-colour',
  BindAddress:  '0.0.0.0',
  Port:         3000,
})

server.start
