function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    const chatBox = document.getElementById("chat-box");

    if (message === "") return;

    chatBox.innerHTML += `<div class="user-message">${message}</div>`;
    input.value = "";

    setTimeout(() => {
        let reply = generateSmartReply(message);
        chatBox.innerHTML += `<div class="bot-message">${reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

function generateSmartReply(message) {
    message = message.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
        return "Hello 👋 I am Nova AI, your creative assistant!";
    }
    if (message.includes("who are you")) {
        return "I am a creative chatbot built with HTML, CSS, and JavaScript ✨";
    }
    if (message.includes("ai")) {
        return "Artificial Intelligence allows machines to simulate human intelligence 🤖";
    }
    if (message.includes("github")) {
        return "This project can be deployed easily using GitHub Pages 🚀";
    }

    return "Interesting question 🤔 I'm still learning and improving!";
}
