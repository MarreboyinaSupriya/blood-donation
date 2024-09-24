document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (validateLogin(email, password)) {
    alert('Login successful');
    // Real scenario: perform backend validation or database check
  }
});

function validateLogin(email, password) {
  if (email === '' || password === '') {
      alert('Both fields are required!');
      return false;
  }
  return true;
}
