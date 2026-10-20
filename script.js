
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

function addMessage(text, sender) {
    const message = document.createElement("div");

    message.classList.add("message");

    if (sender === "user") {
        message.classList.add("user-message");
    } else {
        message.classList.add("bot-message");
    }

    //Only use text
    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}
  //Teebot's responses
  function getBotReply(userText) {
    const text = userText.toLowerCase().trim();

    if (/\b(hi|hello|hey)\b/.test(text)) {
        return "Hey there! 😊 How are you doing?";
    }

    if (text.includes("your name") || text.includes("who are you")) {
        return "I'm TeeBot, your personal chatbot!";
    }

    if (text.includes("how are you")) {
        return "I'm doing well, thanks for asking! How about you?";
    }

    if (text.includes("your purpose") || text.includes("what can you do")) {
        return "I can chat with you, respond to greetings, tell jokes and answer a few simple questions.";
    }

    if (text.includes("joke")) {
        return "Why do programmers prefer dark mode? Because light attracts bugs! 😂";
    }

    if (text.includes("happy")) {
        return "That's lovely! What's making you happy today?";
    }

    if (text.includes("sad") || text.includes("upset")) {
        return "I'm sorry you're feeling that way. Want to tell me a little about what's going on?";
    }

    if (text.includes("thank")) {
        return "You're welcome! 😊";
    }

    if (/\b(bye|goodbye)\b/.test(text)) {
        return "Goodbye! It was nice chatting with you. 👋";
    }

    return "I'm not sure how to respond to that yet. Try saying hello, asking for a joke, or asking what I can do.";
}

chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userText = userInput.value.trim();

    if (userText === "") {
        return;
    }

    addMessage(userText, "user");

    const botReply = getBotReply(userText);
    addMessage(botReply, "bot");

    userInput.value = "";
    userInput.focus();
});
