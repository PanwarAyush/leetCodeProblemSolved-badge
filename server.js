const http = require('http');
async function t(){
const api_url='https://leetcode-stats-api.herokuapp.com/panwar2001';
const response = await fetch(api_url);
const data =  await response.json();
const s=`<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg  transform="scale(1.9)" width="500px" height="500px" version="1.1" xmlns="http://www.w3.org/2000/svg"><text x="150" y="223" id='num'>${data.totalSolved}</text></svg>`
return s;
}
let problems;
t().then((data)=>{
problems=data;
})

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(problems); 
}).listen(8080);