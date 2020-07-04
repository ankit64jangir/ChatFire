const chatForm = document.getElementById("chat-form");



const socket = io();

// message from server
socket.on("message", message => {
  console.log(message);
  outputMessage(message);
});

//message submit

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();


  //get message text
  const msg = e.target.elements.msg.value;

  //Emit message to serveer
  socket.emit("chatMessage",msg);

});

//output message to dom
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `${message}`;
  document.querySelector(".chat-messages").appendChild(div);
}
