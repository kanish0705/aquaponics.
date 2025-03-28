function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    let chatbox = document.getElementById("chatbox");

    // User message
    let userMessage = document.createElement("p");
    userMessage.textContent = "You: " + userInput;
    userMessage.className = "user-message";
    chatbox.appendChild(userMessage);

    // Chatbot response
    let botResponse = getBotResponse(userInput);
    let botMessage = document.createElement("p");
    botMessage.textContent = "Bot: " + botResponse;
    botMessage.className = "bot-message";
    chatbox.appendChild(botMessage);

    // Clear input
    document.getElementById("userInput").value = "";

    // Auto-scroll to latest message
    chatbox.scrollTop = chatbox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
