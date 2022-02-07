function scrollDown() {
  document.getElementById('console-text').scrollTop = document.getElementById('console-text').scrollHeight
}

window.addEventListener('DOMContentLoaded', () => {
  const container = document.body;
  console.log(container)
  console.log = function(message) {
    const p = container.appendChild(document.createElement('p'));
    p.textContent = message;
    p.className = 'console-output';
    
  };
  window.addEventListener('error', (error) => {
    const p = container.appendChild(document.createElement('p'));
    p.textContent = error.message;
    p.className = 'console-output';
    scrollDown();
  });
  console.log('Ready')
})