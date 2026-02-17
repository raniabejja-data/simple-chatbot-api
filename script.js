function generateSmartReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi") || message.includes("hy")) {
        return "Hello 👋 How can I help you today?";
    }

    if (message.includes("how are you") || message.includes("how are u")) {
        return "I'm just a chatbot 🤖 but I'm doing great! What about you?";
    }

    if (message.includes("who are you")) {
        return "I am Nova AI ✨ created using HTML, CSS and JavaScript!";
    }

    if (message.includes("ai")) {
        return "Artificial Intelligence allows machines to simulate human thinking 🤖";
    }

    if (message.includes("github")) {
        return "This project is deployed using GitHub Pages 🚀";
    }

    return "Interesting question 🤔 I'm still learning and improving!";
}
