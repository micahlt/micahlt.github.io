var i = 0;
var output = "<ul>";
var project = ['<s>Youtube Music Clone</s>', 'GetThatDesc!', '<s>Checkmark</s>', 'CSS Transforms'];
var linksList = ['youtube-music.html', 'getthatdisc.html', 'checkmark.html', 'csstransforms.html'];
while (i < project.length) {
  output = output + "<li><a href = '" + linksList[i] + "'>" + project[i] + "</a></li>";
  i++;
};
output = output + "</ul>";
console.log("Injecting the following HTML to the projects list: \n\n" + output);
document.getElementById('exList').innerHTML = output;
