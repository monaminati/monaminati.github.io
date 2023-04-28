document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var comment = document.querySelector('textarea').value;
  localStorage.setItem('comment', comment);
  alert('Kommentar gespeichert!');
});
