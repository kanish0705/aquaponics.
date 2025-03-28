function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you?";
    } else if (input.includes("how are you")) {
        return "I'm just a bot, but I'm doing great!";
    } else if (input.includes("bye")) {
        return "Goodbye! Have a great day!";
    } else {
        return "I'm not sure about that. Can you ask something else?";
    }
}
