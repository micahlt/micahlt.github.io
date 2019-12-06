console.log("We see you're in the console!\nWelcome to the home of the web dev!\n💉 Make sure you don't paste any code here from people you don't trust.");
function showInfo(e) {
  event.preventDefault();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var userParsed = JSON.parse(this.responseText);
    var description = userParsed.profile['bio'];
    var profilePic = userParsed.profile['images']['60x60'];
    document.getElementById("info1").innerHTML = '<p class = "username">' + document.getElementById('usrname').value + '</p><br><img class = "pfp" src = "' + profilePic + '"><br><br>' + description;
  };
};
xhttp.open("GET", "https://cors-anywhere.herokuapp.com/api.scratch.mit.edu/users/" +document.getElementById('usrname').value, false);
xhttp.send();
}
// useless fetch code
/*
 fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */

function exportImage() {
  console.log('Saving image...');
domtoimage.toBlob(document.getElementById('card'))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
        console.log('image saved');
    });
};
