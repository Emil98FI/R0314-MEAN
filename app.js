var http=require('http');

var server=http.createServer(function(req,res){
    
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write('<h1>Hello Node</h1>');

    var data =
      "<table border='1'><tr><td>Henri</td><td>Mikko</td></tr><tr><td>voitto</td><td>häviö</td></tr></table>";
    res.write(data);

    res.end();
});

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(88);
