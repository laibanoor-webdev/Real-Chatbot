const messageInput = document.querySelector("#messageInput");
const sendBtn = document.querySelector("#sendBtn");
const chatBox = document.querySelector("#chatBox");

sendBtn.addEventListener("click", sendMessage);

messageInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const text = messageInput.value.trim();

  if (text === "") {
    return;
  }

  addMessage(text, "sent");

  messageInput.value = "";

  setTimeout(function () {
    const reply = getBotReply(text);

    addMessage(reply, "received");
  }, 500);
}

function addMessage(text, type) {
  const messageDiv = document.createElement("div");

  messageDiv.classList.add("message");
  messageDiv.classList.add(type);

  const messageText = document.createElement("span");

  messageText.textContent = text;

  const timeElement = document.createElement("span");

  timeElement.classList.add("time");
  timeElement.textContent = getTime();

  messageDiv.appendChild(messageText);
  messageDiv.appendChild(timeElement);

  chatBox.appendChild(messageDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function getTime() {
  const now = new Date();

  return now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! How can I help you?";
  }

  if (text.includes("how are you")) {
    return "I'm doing great! Thanks for asking.";
  }

  if (text.includes("help")) {
    return "Sure! I'm here to help you.";
  }

  if (text.includes("bye")) {
    return "Goodbye! Have a nice day.";
  }

  return "Thanks for your message!";
}