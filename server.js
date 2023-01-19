const http = require('http');
var url = require('url');
async function t(api_url){
const response = await fetch(api_url);
const data =  await response.json();
return data.totalSolved;
}
let problems;
function setProblems( username){
  const api_url='https://leetcode-stats-api.herokuapp.com/'+username;
 t(api_url).then((data)=>{
const s=`<svg width="600" height="100" xmlns="http://www.w3.org/2000/svg"><image href="https://leetcode.com/static/images/LeetCode_Sharing.png" height="100" width="200"/><text x="10" y="18" fill="red" style="background-color:">Solved ${data} problems</text></svg>`
problems=s;
})
}

http.createServer(function (req, res) {
var url_parts = url.parse(req.url, true);
var query = url_parts.query;
  setProblems(query.profile)
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(problems); 
}).listen(8080);