

var socket=  new WebSocket("ws://localhost:8080/WebSocket/hello"); //to url toy endpoint, to diko moy
socket.onmessage = onMessage; //socket property returns the event listener to be called when a message is received from the server. The listener receives a MessageEvent named "message".

function onMessage(event) {
    var newMessage = event.data; // to newMessage tha parei to input opoy exw balei to event
    var chats = document.getElementById("content");
    var newHtml = chats.innerHTML+newMessage; // to newHtml tha parei oti eixe to content + to neo input
    document.getElementById("content").innerHTML=newHtml; // to synoliko mhnyma tha mpei sto content
}

function say(name, text){ //pairnei parametrous to name kai text inputs kai dhmiourgei ena Json --> msg, sth synexeia to pernaei se ena string
    var msg = {
    type: "message",
    text: text,
    name: name,
    date: new Date(Date.now()).toLocaleString() //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
  };

//Convert a JavaScript object into a string with JSON.stringify().
    socket.send(JSON.stringify(msg));
}

function formSubmit(){ // kaleitai inline me to onclick="formSubmit()" sto submit
    var name = document.getElementById("name").value; //pernaei sta var text k var name tis times ths eisodoy
    var text = document.getElementById("message").value;
    
    say(name, text); // me xrhsh twn eisodwn dhmioyrgei ena String kai to topothetei sto socket gia na to dosei sto backend
   
}



//function register(){
//      var name = document.getElementById("name").value; 
//}



