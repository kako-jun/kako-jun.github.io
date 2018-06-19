
require 'webrick'
require 'json'

def return_json req, res
  callback = WEBrick::HTMLUtils.escape( req.query["callback"] )
  callback = "callback" if callback == ""
  res.content_type = "jsonp"
  res.body = callback + "(" + yield.to_json + ")"
  STDERR.puts res.body
end

server = WEBrick::HTTPServer.new({
  DocumentRoot: '.',
  BindAddress:  '0.0.0.0',
  Port:         4000,
})

server.mount_proc('/api/threads') do |req, res|
  File.open("json/bbs.json") do |f|
    res.body = f.read
  end
end

server.mount_proc('/api/add-comment') do |req, res|
  query = JSON.parse(req.body)

  bbs = []
  File.open("json/bbs.json") do |f|
    bbs = JSON.load(f)
  end

  target_thread = bbs.find{|thread| thread["id"] === query["threadID"]}
  next_comment_id = 0
  if (target_thread["comments"].length > 0)
    last_comment = target_thread["comments"].max_by{|comment| comment["id"]}
    next_comment_id = last_comment["id"] + 1
  end

  target_thread["comments"].push({
    id: next_comment_id,
    dt: query["dt"],
    name: query["name"],
    desc: query["desc"],
    remote_ip: req.remote_ip,
    ip: query["ip"],
    visible: false,
  })

  json_str = JSON.pretty_generate(bbs)
  File.open("json/bbs.json", 'w') do |f|
    f.puts(json_str)
  end

  return_json(req, res) do
    {
      result: true,
    }
  end
end

server.mount_proc('/api/remove-comment') do |req, res|
  query = JSON.parse(req.body)

  bbs = []
  File.open("json/bbs.json") do |f|
    bbs = JSON.load(f)
  end

  target_thread = bbs.find{|thread| thread["id"] === query["threadID"]}
  target_thread["comments"].reject!{|comment| comment["id"] === query["commentID"]}

  json_str = JSON.pretty_generate(bbs)
  File.open("json/bbs.json", 'w') do |f|
    f.puts(json_str)
  end

  return_json(req, res) do
    {
      result: true,
    }
  end
end

server.mount_proc('/api/visible-comment') do |req, res|
  query = JSON.parse(req.body)

  bbs = []
  File.open("json/bbs.json") do |f|
    bbs = JSON.load(f)
  end

  target_thread = bbs.find{|thread| thread["id"] === query["threadID"]}
  target_comment = target_thread["comments"].find{|comment| comment["id"] === query["commentID"]}

  target_comment["visible"] = true;

  json_str = JSON.pretty_generate(bbs)
  File.open("json/bbs.json", 'w') do |f|
    f.puts(json_str)
  end

  return_json(req, res) do
    {
      result: true,
    }
  end
end

server.mount_proc('/api/invisible-comment') do |req, res|
  query = JSON.parse(req.body)

  bbs = []
  File.open("json/bbs.json") do |f|
    bbs = JSON.load(f)
  end

  target_thread = bbs.find{|thread| thread["id"] === query["threadID"]}
  target_comment = target_thread["comments"].find{|comment| comment["id"] === query["commentID"]}

  target_comment["visible"] = false;

  json_str = JSON.pretty_generate(bbs)
  File.open("json/bbs.json", 'w') do |f|
    f.puts(json_str)
  end

  return_json(req, res) do
    {
      result: true,
    }
  end
end

server.start
