window.onload = function(){
var url = "http//server.com/data.json";
var request = new XMLHttpRequest();
request.open = ("GET", url);

request.onload = function () {
if (request.status == 200){
   alert("response received");
}

};

request.send(null);
}
