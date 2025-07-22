// Grab elements
const startBtn = document.getElementById('startCall');
const chatContainer = document.getElementById('chat-container');

// Simple helper to append a message
function addMessage(text, cls) {
  const div = document.createElement('div');
  div.className = 'message ' + cls;
  div.textContent = text;
  chatContainer.appendChild(div);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Handle “Start Call” click
startBtn.addEventListener('click', () => {
  addMessage('🔊 Requesting microphone permission…', 'bot');

  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      addMessage('🎉 Microphone access granted!', 'bot');
      // Here you’d hook up WebRTC signaling
    })
    .catch(err => {
      addMessage('❌ Microphone access denied.', 'bot');
      console.error(err);
    });
});
