// Kommentar aus dem Local Storage laden
var comment = localStorage.getItem('comment');
if (comment) {
  var commentBox = document.querySelector('#comments');
  var newComment = document.createElement('div');
  newComment.textContent = comment;
  commentBox.appendChild(newComment);
}

// Kommentar auf GitHub speichern
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var comment = document.querySelector('textarea').value;
  localStorage.setItem('comment', comment);
  alert('Kommentar gespeichert!');
  
  // GitHub API aufrufen, um das Repository zu aktualisieren
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', 'https://api.github.com/repos/<Dein Benutzername>/mono-minati/contents/comments.txt');
  xhr.setRequestHeader('Authorization', 'token <Dein GitHub Token>');
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  };
  var content = btoa(comment);
  var data = JSON.stringify({
    message: 'Neuer Kommentar hinzugefügt',
    content: content,
    branch: 'gh-pages'
  });
  xhr.send(data);
});
