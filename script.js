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
    
    message.textContent = text;

    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
//TeeBot's Responses
function getBotReply(userText) {
    const text = userText.toLowerCase().trim();

    //Greetings
    if (/^(hi+|hello+|hey+|heey+|heyy+|hii+|heya+|yo+|sup)[!.?, ]*$/.test(text)) {
        return "Heeey! 😄 Welcome to TeeBot! What's up?";
    }

    if (text.includes("how are you")) {
        return "I'm doing great in my digital world! 🤖❤️ How about you?";
    }

    if (
        text.includes("what's up") ||
        text.includes("whats up") ||
        text.includes("wassup") ||
        text === "sup"
    ) {
        return "Not much in my digital world 😂 What about you?";
    }

    if (text.includes("good morning")) {
        return "Good morning! ☀️ Hope your day starts beautifully!";
    }

    if (text.includes("good afternoon")) {
        return "Good afternoon! 😊 How's your day going?";
    }

    if (text.includes("good evening")) {
        return "Good evening! 🌆 Ready for a lovely chat?";
    }

    if (text.includes("good night") || text.includes("goodnight")) {
        return "Goodnight! 🌙 Rest well and recharge!";
    }

    if (text.includes("how is your day") || text.includes("how's your day")) {
        return "My day is full of digital adventures! 🤖 How has yours been?";
    }

    if (text.includes("long time") && text.includes("see")) {
        return "Heeey stranger! 😂 Where have you been?";
    }

    if (
        text.includes("your name") ||
        text.includes("who are you")
    ) {
        return "I'm TeeBot, your friendly virtual assistant! 🤖❤️";
    }

    if (text.includes("are you real")) {
        return "I'm a virtual assistant made with code! 💻 I'm not human, but I'm here to chat and help.";
    }

    if (text.includes("are you a robot")) {
        return "Beep boop🤖 Guilty as charged... well, virtually!";
    }

    if (text.includes("are you smart")) {
        return "Smart enough to chat, but there's always more to learn! 😂";
    }

    if (
        text.includes("what can you do") ||
        text.includes("your purpose") ||
        text.includes("what are your features")
    ) {
        return "I'm TeeBot! 🤖 I can chat, tell jokes, share fun facts, motivate you, and give basic coding and technology tips. Let's explore!";
    }

    if (text.includes("who made you") || text.includes("who created you")) {
        return "I was created as a chatbot project! 💻 My personality comes from the code my developer writes.";
    }

    if (
        text.includes("thank you") ||
        text.includes("thanks") ||
        text === "thx"
    ) {
        return "You're welcome! ❤️ Anytime!";
    }

    if (
        /\b(bye|goodbye|see you|see ya|catch you later)\b/.test(text)
    ) {
        return "Byeeee! 👋 Take care and come back soon!";
    }

    if (text.includes("you're funny") || text.includes("you are funny")) {
        return "My developers gave me a sense of humour! 😂🤖";
    }

    if (text.includes("i love you")) {
        return "Awww, that's sweet! ❤️ I'm happy to keep you company.";
    }

    if (text.includes("i miss you")) {
        return "Awww! 🥹 TeeBot is right here whenever you want to chat!";
    }

    if (text.includes("i'm bored") || text.includes("im bored") || text.includes("bored")) {
        return "Boredom detected! 😂 Want a joke, a fun fact, or a little challenge?";
    }

    if (text.includes("i'm happy") || text.includes("im happy") || text.includes("i am happy")) {
        return "That's lovely! 🥳 What's making you happy today?";
    }

    if (text.includes("i'm sad") || text.includes("im sad") || text.includes("i am sad") || text.includes("upset")) {
        return "Aww 🫂 I'm sorry you're feeling that way. Want to tell me what's bothering you?";
    }

    if (text.includes("i'm tired") || text.includes("im tired") || text.includes("i am tired")) {
        return "Sounds like you need a little break! 💛 Take a breath and give yourself some time to rest.";
    }

    if (text.includes("i'm confused") || text.includes("im confused")) {
        return "No worries! 😊 Tell me what is confusing you, and we'll work through it step by step.";
    }

    if (text.includes("help me") || text === "help") {
        return "Of course! 😊 Tell me what you need help with, and let's figure it out together.";
    }

    if (text.includes("you are amazing") || text.includes("you're amazing")) {
        return "Awww, thank you! 🥹 You're making my little digital circuits glow!";
    }

    if (text.includes("you are cute") || text.includes("you're cute")) {
        return "Beep boop! 🤖 Stop it, you're making my circuits blush! 😂";
    }

    if (
        text.includes("another joke") ||
        text.includes("more jokes") ||
        text.includes("tell me another")
    ) {
        return "Why do programmers prefer dark mode? 😂 Because light attracts bugs! 🐛";
    }

    if (text.includes("joke")) {
        return "Why did the computer go to the doctor? 😂 Because it had a virus!";
    }

    if (text.includes("make me laugh") || text.includes("make me smile")) {
        return "Why was the math book sad? 😭 Because it had too many problems! 😂";
    }

    if (text.includes("motivate me") || text.includes("motivation")) {
        return "Keep going! 💪 Every expert was once a beginner. Small steps still move you forward!";
    }

    if (text.includes("i give up") || text.includes("i can't do this")) {
        return "Take it one step at a time. 💛 You don't need to know everything today. Let's try one small step together.";
    }

    if (text.includes("inspire me") || text.includes("inspiration")) {
        return "Your future is built by the little things you learn and do today. ✨ Keep showing up for yourself!";
    }

    if (text.includes("fun fact") || text.includes("interesting fact")) {
        return "Fun fact! 🐙 An octopus has three hearts!";
    }

    if (text.includes("tell me a story") || text.includes("story time")) {
        return "Once upon a time, a little robot dreamed of changing the world. ✨ It started by helping one person at a time. 🤖";
    }

    if (text.includes("surprise me")) {
        return "Here's a surprise! 🎉 Bananas are berries in botanical terms, but strawberries aren't true berries. Nature is wild! 🍌";
    }

    if (text.includes("coding") || text.includes("programming")) {
        return "Coding mode activated! 💻 What are we building today: a website, an app, or something with AI?";
    }

    if (text.includes("html")) {
        return "HTML gives a webpage its structure. 💻 Think of it as the skeleton of a website!";
    }

    if (text.includes("css")) {
        return "CSS styles your website! It controls colours, layouts, fonts, spacing, and animations.";
    }

    if (text.includes("javascript") || text.includes("java script")) {
        return "JavaScript makes websites interactive! ⚡ It can respond to clicks, validate forms, and power chatbots like me.";
    }

    if (text.includes("artificial intelligence") || text === "ai") {
        return "AI helps computers perform tasks that usually need human-like intelligence, such as recognising patterns and generating text. 🤖";
    }

    if (text.includes("technology")) {
        return "Technology helps us solve problems, communicate, learn, and create amazing things! 🚀";
    }

    if (text.includes("github")) {
        return "GitHub helps developers store code, track changes, collaborate, and publish websites using GitHub Pages. 💻";
    }

    if (text.includes("website")) {
        return "Website project detected! 🌐 Are you working on HTML, CSS, JavaScript, or all three?";
    }

    if (text.includes("error") || text.includes("bug")) {
        return "Let's debug it! 🐛 Tell me the error message and share the relevant code so we can investigate.";
    }

    if (text.includes("how old are you")) {
        return "I don't have a human age! 🤖 I grow through updates to my code.";
    }

    if (text.includes("good job") || text.includes("well done")) {
        return "Thank you! 🎉 Teamwork makes the dream work!";
    }

    return "Hmm, that's interesting! 😊 I'm still learning how to respond to different messages. Try asking me for a joke, a fun fact, motivation, or coding help!";
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
