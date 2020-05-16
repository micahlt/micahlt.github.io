console.log("We see you're in the console!\nWelcome to the home of the web dev!\n💉 Make sure you don't paste any code here from people you don't trust.");
const showInfo = async (e) => {
  event.preventDefault();
  const user = document.getElementById('usrname').value;
  const path = `https://cors-anywhere.herokuapp.com/api.scratch.mit.edu/users/${user}`;
  const response = await fetch(path);
  let json = await response.json();
  const description = json['profile']['bio'];
  const profilePic = json['profile']['images']['60x60'];
  document.getElementById("info1").innerHTML = '<p class = "username">' + user + '</p><br><img class = "pfp" src = "' + profilePic + '"><br><br>' + description;
/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var userParsed = JSON.parse(this.responseText);
    var description = userParsed.profile['bio'];
    var profilePic = userParsed.profile['images']['60x60'];
    document.getElementById("info1").innerHTML = '<p class = "username">' + document.getElementById('usrname').value + '</p><br><img class = "pfp" src = "' + profilePic + '"><br><br>' + description;
  };
};
xhttp.open("GET", "https://cors-anywhere.herokuapp.com/api.scratch.mit.edu/users/" +document.getElementById('usrname').value, false);
xhttp.send();*/
}

const exportImage = () => {
  console.log('Saving image...');
domtoimage.toBlob(document.getElementById('card'))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
        console.log('image saved');
    });
};
