document.getElementById('button').addEventListener('click', () => {
  fetch('/api').then(response => response.json()).then(data => {
    document.getElementById('response').textContent = data.message;
  });
});
