const bubbleCount = 100;
const bubbles = [];
for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = `${Math.random() * 100}vw`;
  bubble.style.animationDuration = `${Math.random() * 10 + 5}s`;
  bubble.style.animationDelay = `${Math.random() * 5}s`;
  bubble.style.width = `${Math.random() * 20 + 20}px`; // Random size between 20px and 40px
  bubble.style.height = bubble.style.width;
  document.body.appendChild(bubble);
  bubbles.push(bubble);
}
