const http = require('http');
const port = 3500;
const fs = require('fs');
const path =require('path');
const url = require('url');
const { error } = require('console');
const users = require('./public/page-login/users');
//create server
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.mp3': 'audio/mpeg',
    '.mp4': 'video/mp4',
    '.txt': 'text/plain',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'woff': 'application/font-woff',
    'woff2': 'application/font-woff2',
    'ttf': 'application/font-ttf',
    'eot': 'application/vnd.ms-fontobject',
    'otf': 'application/font-otf',
    'swf': 'application/x-shockwave-flash',
    'wasm': 'application/wasm'    
}

function staticFile (res, filepath,ext){
    res.setHeader("Content-type",mimeTypes[ext]);
    fs.readFile('./public/'+filepath,(error,data)=>{
        if (error) {
            res.statusCode = 404;
            res.end('404 - Not Found');
        } else {
            res.end(data);
        }
    });
}
http.createServer(function(req, res) {
  const url = req.url;
  console.log('server work');

  switch (url) {
    case '/':
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.write('<h2>Home</h2>');
      res.end()
      break;
    case '/login':
        staticFile(res,'page-login/login.html','.html')
    case '/contact':
      console.log('contact_1111');
      staticFile(res,'contact/contact.html','.html');
      break;
      case '/main':
        console.log('mymain');
        staticFile(res,'my-react-app/public/index.html','.html');
        break;
    default:
        const extname  = String(path.extname(url)).toLocaleLowerCase();
        if (extname in mimeTypes){
            staticFile(res,url,extname);

        }
        else{
            res.statusCode = 404;
            res.write('<h2>404 - Not Found</h2');
            }
        }
}).listen(port);
