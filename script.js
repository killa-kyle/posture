var reminderText = document.getElementById('reminderText');
function reminder() {
  // reminderText.style.transition= '0.3s';
  reminderText.style.textDecoration = 'underline';
  reminderText.style.textDecorationColor = 'red';
}

function reminderOff() {
  reminderText.style.textDecoration = 'none';
}
