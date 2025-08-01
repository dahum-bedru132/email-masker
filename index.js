document.getElementById('maskButton').onclick = () => {
  const email = document.getElementById('emailInput').value.trim();
  const masked = email.replace(/^(.)(.*)(.@.*)$/, (_, a, b, c) =>
    b.length ? a + '*'.repeat(b.length - 1) + c : '');
  document.getElementById('maskedEmail').textContent =
    masked.includes('@') ? masked : 'Please enter a valid email.';
};

