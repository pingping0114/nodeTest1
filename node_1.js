var http=require("http");
http.createServer(function(request,response){
 response.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
  if(request.url!="/favicon.ico"){//Çå³þÁ½´Î·ÃÎÊ
   console.log("going");
   response.write("hello, world!");
   response.end();
  }
}).listen(8011);
console.log("node is running on port http://127.0.0.1:8011/");

//nihao 
